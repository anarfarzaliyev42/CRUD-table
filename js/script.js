"use strict";

$(document).ready(function () {
  //  GetAllUsersList();
  //Salary sum written here
    let salarySum=0;
    let allRowstd1=$('tbody tr td');
    allRowstd1.each(function () {
        if($(this)==allRowstd1[2]){
            salarySum+=Number($(this).text());
        }
        
    })


  $(document).on("click", ".add-more-user button", function (event) {
   
     
    // let value=$(event.target);
    // console.log($(value).hasClass('btn','btn-success'));
    
    let allInputs5 = $(".add-edit-table .form-group input");
    allInputs5.each(function (index) {
     $(this).val('');

    })
    $('.add-save-change').attr('disabled', 'disabled');

    $('.add-save-change').css("display", "block");
    $('.edit-save-change').css("display", "none");

    $(".add-edit-table").css("display", "block");


    $(".add-user-header").css("display", "block");
    $(".edit-user-header").css("display", "none");

   
  });
 // Add user save change button start
    $(document).on("click", ".add-edit-table .add-save-change", function () {

      let allInputs = $(".add-edit-table .form-group input");

      let newTrTag = $("<tr></tr>");
      let newTdTag;
      let deleteTd = $(
        "<td><button class='btn btn-danger delete-button'>Delete</button></td>"
      );
      let editTd = $("<td><button class='btn btn-primary edit-button'>Edit</button></td>");

      allInputs.each(function (index) {
          if(index==2){
             newTdTag = `<td class='ng-binding salary'>${$(this).val()}</td>`;
          }
          else{
            newTdTag = `<td class='ng-binding'>${$(this).val()}</td>`;
          }
        

        $(newTdTag).appendTo(newTrTag);
      });

      $(editTd).appendTo(newTrTag);
      $(deleteTd).appendTo(newTrTag);
     
      $(newTrTag).insertBefore(".total");
       //Salary sum written here
       salarySum=0;
       allRowstd1=$('tbody tr td');
      allRowstd1.each(function () {
          if($(this).is('.salary')){
              salarySum+=Number($(this).text());
          }
          
      })
      $('.result').text(salarySum);
      $(".add-edit-table").css("display", "none");
    });
    // Add user save change button end
  $(document).on('click', 'tr .edit-button', function () {
    
    $('.add-save-change').css("display", "none");
    $('.edit-save-change').css("display", "block");
    $(".add-edit-table").css("display", "block");
    $(".add-user-header").css("display", "none");
    $(".edit-user-header").css("display", "block");
    let allInputs2 = $(".add-edit-table .form-group input");
    

    let allTd = $(this).closest('tr').find('.ng-binding');
    allTd.each(function (index) {
      $(this).addClass('active-td');
      $(allInputs2[index]).val($(this).text());

    })

    // Edit user save change button start
    $(document).on("click keyup", ".add-edit-table .edit-save-change", function () {
       
      $(".add-edit-table").css("display", "none");
      let allInputs3 = $(".add-edit-table .form-group input");
      let allTd2 = $('.active-td');
      console.log(allTd2);

      allTd2.each(function (index) {
        $(this).text($(allInputs3[index]).val());



        $(this).removeClass('active-td');

      })
       //Salary sum written here
      salarySum=0;
      allRowstd1=$('tbody tr td');
     allRowstd1.each(function () {
         if($(this).is('.salary')){
             salarySum+=Number($(this).text());
         }
         
     })
     $('.result').text(salarySum);
    });
   
    // Edit user save change button end
  })
  // Add user Save button disabled start
  let count = 0;
  $(document).on('keyup', ".add-edit-table .form-group input", function () {

    let allInputs4 = $(".add-edit-table .form-group input");
    allInputs4.each(function (index) {
      if ($(this).val() == '') {
        count++;
      }
    })

    if (count == 0) {
      $('.add-save-change').removeAttr('disabled');
    } else {
      $('.add-save-change').attr('disabled', 'disabled');
     
    }
    count = 0;


  })
  // Add user Save button disabled end
  // Edit user Save button disabled start
  let count1 = 0;
  $(document).on('keyup', ".add-edit-table .form-group input", function () {

    let allInputs4 = $(".add-edit-table .form-group input");
    allInputs4.each(function (index) {
      if ($(this).val() == '') {
        count1++;
      }
    })

    if (count1 == 0) {
      $('.edit-save-change').removeAttr('disabled');
    } else {
      $('.edit-save-change').attr('disabled', 'disabled');
    }
    count1 = 0;



  })
  // Edit user Save button disabled end
  // Add user input danger validations start
  $(document).on('keyup', ".add-edit-table .form-group input", function () {
    if (!$(this).val()) {
      if ($(this).is('#editName')) {
        $(this).next('div').css('display', 'block');


      } else if ($(this).is('#editCountry')) {
        $(this).next('div').css('display', 'block');
      } else if ($(this).is('#editSalary')) {
        $(this).next('div').css('display', 'block');
        $('.please-input-salary').css('display', 'block');
        $('.valid-salary').css('display', 'none');
        $('.salary-greater-than').css('display', 'none');
      } else if ($(this).is('#editEmail')) {
        $(this).next('div').css('display', 'block');
      }

    } else if ($(this).val()) {
      if ($(this).is('#editName')) {
        $(this).next('div').css('display', 'none');
      } else if ($(this).is('#editCountry')) {
        $(this).next('div').css('display', 'none');
      } else if ($(this).is('#editSalary')) {
        if (parseInt($(this).val()) <= 0) {
          $(this).next('div').css('display', 'block');
          $('.salary-greater-than').css('display', 'block');
          $('.please-input-salary').css('display', 'none');
          $('.valid-salary').css('display', 'none');
        }
        // some problem down
        else if (!Number($(this).val())) {
          console.log('asd');

          $(this).next('div').css('display', 'block');
          $('.salary-greater-than').css('display', 'none');
          $('.please-input-salary').css('display', 'none');
          $('.valid-salary').css('display', 'block');

        }
        // some problem up
        else {
          $(this).next('div').css('display', 'none');
        }
      }
      // Email validation problem down
      else if ($(this).is('#editEmail')) {
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($(this).val())) {
          $(this).next('div').css('display', 'none');
        }

      }
      // Email validation problem up
    }

  })
  // Add user input danger validations start
  $(document).on('blur', ".add-edit-table .form-group input", function () {
    if (!$(this).val()) {
      if ($(this).is('#editName')) {
        $(this).next('div').css('display', 'block');


      } else if ($(this).is('#editCountry')) {
        $(this).next('div').css('display', 'block');
      } else if ($(this).is('#editSalary')) {
        $(this).next('div').css('display', 'block');
        $('.please-input-salary').css('display', 'block');
        $('.valid-salary').css('display', 'none');
        $('.salary-greater-than').css('display', 'none');
      } else if ($(this).is('#editEmail')) {
        $(this).next('div').css('display', 'block');
      }

    } else if ($(this).val()) {
      if ($(this).is('#editName')) {
        $(this).next('div').css('display', 'none');
      } else if ($(this).is('#editCountry')) {
        $(this).next('div').css('display', 'none');
      } else if ($(this).is('#editSalary')) {
        if (parseInt($(this).val()) <= 0) {
          $(this).next('div').css('display', 'block');
          $('.salary-greater-than').css('display', 'block');
          $('.please-input-salary').css('display', 'none');
          $('.valid-salary').css('display', 'none');
        }
        // some problem down
        else if (!Number($(this).val())) {
          console.log('asd');

          $(this).next('div').css('display', 'block');
          $('.salary-greater-than').css('display', 'none');
          $('.please-input-salary').css('display', 'none');
          $('.valid-salary').css('display', 'block');

        }
        // some problem up
        else {
          $(this).next('div').css('display', 'none');
        }
      }
      // Email validation problem down
      else if ($(this).is('#editEmail')) {
        let testEmail = /^[A-Z0-9._%+-]+@([A-Z0-9-]+\.)+[A-Z]{2,4}$/i;
        if (testEmail.test($(this).val())) {
          $(this).next('div').css('display', 'none');
        }

      }
      // Email validation problem up
    }

  })
  // Delete button
  $(document).on('click', 'tr .delete-button', function () {
    let allInputs7 = $(".add-edit-table .form-group input");
    allInputs7.each(function (index) {
      $(this).val('');
    })

    $(this).closest('tr').remove();
    let deleteSalary=parseInt($(this).closest('tr').find('.salary').text());
    salarySum=0;
      allRowstd1=$('tbody tr td');
     allRowstd1.each(function () {
         if($(this).is('.salary')){
             salarySum+=Number($(this).text());
         }
         
     })
   
     $('.add-edit-table').hide();     
     $('.result').text(salarySum);
  })

  $(document).on('keyup', '.search-input-div input', function () {
    let inputValue = $(this).val().toLowerCase().trim();
    $(".ng-binding").closest('tr').each(function () {
      $(this).toggle($(this).text().toLowerCase().indexOf(inputValue) > -1);
    });
  });

  $(document).on('click', '.cancel', function () {
    let allInputs6 = $(".add-edit-table .form-group input");
    allInputs6.each(function (index) {
      console.log($(this).val(''));

    })
    $(".add-edit-table").css("display", "none");
  })

  let obj = {};
  let counter = 1;
$(document).on("click", ".add-edit-table .add-save-change", function () {


  let user = {
      Name: $("#editName").val(),
      Country: $("#editCountry").val(),
      Salary: $("#editSalary").val(),
      Email: $('#editEmail').val()
  }

  if (obj[`user-${counter}`] == undefined) {
      obj[`user-${counter}`] = [];
  }
console.log(counter);

  obj[`user-${counter}`].push(user);

  localStorage.setItem("users", JSON.stringify(obj));

  counter++;
console.log(counter);


});

// function GetAllUsersList(){
//   let localUser = localStorage.getItem("users");

//   let obj = JSON.parse(localUser);


// for (const key in obj) {
//   console.log(key);
  
//   if (obj.hasOwnProperty(key)) {
//       const element = obj[key];
//         console.log(element);
        
//       element.forEach(e => {
//           $(`<tr >
//           <td class'ng-binding'>${e.Name}</td>
//           <td class'ng-binding'>${e.Country}</td>
//           <td class'ng-binding'>${e.Salary}</td>
//           <td class'ng-binding'>${e.Email}</td>
//           <td class'ng-binding'><button class='btn btn-primary edit-button'>Edit</button></td>
//           <td class'ng-binding'><button class='btn btn-danger delete-button'>Delete</button></td>
//           </tr>`).insertBefore('.total-row');
//       });
//   }
// }
// }

});