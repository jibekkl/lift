const input = document.querySelector(".main");
const input1 = document.querySelector(".main1");
const input2 = document.querySelector(".main2");
const add = document.querySelector(".add");
const table = document.querySelector(".table-body")

{
  /* <li class="list-group-item w-50">go to home</li> */
}

// add.addEventListener("click", () => {
//   if (input.value.trim() === "") {
//     alert("error");
//   } else {
//     list.innerHTML += `<li class="list-group-item w-50    d-flex align-items-center justify-content-between">
//     ${input.value}
//     <button type="button" class="btn btn-danger">Delete</button>
//     </li>`;

//     input.value = " ";
//   }
// });




add.addEventListener("click", () => {
  table.innerHTML+=`<tr>
  <th scope="row">1</th>
  <td>
  <img src= ${input.value} alt="">
  </td>
  <td>
  ${input1.value}
  </td>
  ${input2.value}
  <td>
  
  </td>
</tr>`
})






















