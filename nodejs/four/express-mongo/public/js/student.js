// 定义数据
let curPageNum = 1; // 当前的页码数
let curPageSize = 5; // 当前的每页显示条数

// 获取学生列表数据的方法
let getStudentList = () => {
  // 发送ajax请求
  $.get(
    "http://localhost:3000/api/getStudentListBySearch",
    {
      pageNum: curPageNum,
      pageSize: curPageSize,
      name: $("#searchName").val()
    },
    res => {
      console.log(res);
      if (res.code === 0) {
        // 循环渲染学生数据
        let data = res.data.list;
        let html = "";

        data.forEach((item, index) => {
          html += `
          <tr>
            <td>${index + 1}</td>
            <td>${item.name}</td>
            <td>${item.age}</td>
            <td>${item.sex === 1 ? "男" : "女"}</td>
            <td>
              <button>修改</button>
              <button class="del" data-id="${item._id}" >删除</button>
            </td>
          </tr>
        `;
        });

        $("#myBody").html(html);

        // 循环渲染分页的结构
        let totalPage = res.data.totalPage;
        let pageHtml = "";
        let prevPage = curPageNum - 1 > 1 ? curPageNum - 1 : 1; // 上一页的页码
        let nextPage = curPageNum + 1 < totalPage ? curPageNum + 1 : totalPage; // 下一页的页码

        pageHtml += `<li data-page="${prevPage}" >Prev</li>`;
        for (let i = 1; i <= totalPage; i++) {
          pageHtml += `
          <li data-page="${i}" class="${
            curPageNum === i ? "active" : ""
          }" >${i}</li>
        `;
        }
        pageHtml += `<li data-page="${nextPage}">Next</li>`;

        $(".myPage").html(pageHtml);
      } else {
        // res.msg 后台可能给的是完整的错误信息，这些信息在前端给用户去看，是不够优雅的。
        // 前端一般会统一写成 “网络异常，请稍后重试”
        alert(res.msg);
      }
    }
  );
};

/**
 * 删除某个学生
 * @param {String} studentId 某个学生的id
 */
let delStudent = studentId => {
  $.post(
    "http://localhost:3000/api/deleteStudent",
    {
      abc: studentId
    },
    res => {
      console.log(res);
      if (res.code === 0) {
        // 删除成功
        alert("删除成功");

        // 重新获取学生列表数据
        getStudentList();
      } else {
        // 删除失败
        alert(res.msg);
      }
    }
  );
};

$(function() {
  // 页面加载完成

  getStudentList();

  // 事件绑定
  $("#myBody").on("click", ".del", function() {
    // 1. 获取当前点击的删除按钮身上的 data-id 的属性值，这个值就是当前学生的id
    // let id = $(this).attr('data-id')

    // console.log($(this));
    let id = $(this).data("id");
    // console.log(id);
    delStudent(id);
  });

  $(".myPage").on("click", "li", function() {
    let page = $(this).data("page");
    console.log(page);
    // 1. 先修改  curPageNum
    curPageNum = page;
    // 再次调用请求学生列表的方法
    getStudentList();
  });

  $("#searchBtn").click(function() {
    // 1 将curPageNum
    curPageNum = 1;
    // 2 发送ajax请求
    getStudentList();
  });
});
