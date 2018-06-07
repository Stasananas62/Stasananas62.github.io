
$(function () {
	var table = $('#mainTable')
	$('#buttonAdd').click(function() {
		addRow();
	})
	// $('#button-edit').click(function () {
	// 	functionName();
	// })
	//
	// function functionName() {

	// }

	function addRow () {
		var row = $('<tr>')
		var name = $('#recipient-name')
		var number = $('#recipient-number')
		var email = $('#recipient-mail')
		row.append($('<td>', {
			text: name.val()
		})).append($('<td>', {
			text: number.val()
		})).append($('<td>', {
			text: email.val()
		})).append(createRowGroupButtons())
		table.find('tbody').append(row)

		name.val('')
		number.val('')
		email.val('')
	}


		function createRowGroupButtons() {
			return $('<td>').append($('<div>', {
				class: 'btn-group-vertical'
			}).append($('<button>', {
				text: '  Edit  ',
				class: 'btn btn-warning button-edit',
			})).append($('<button>', {
				text: '  Delete  ',
				class: 'btn btn-danger button-delete'
			})))
		}

		$(document).on('click', '.button-delete', function(e) {
			e.preventDefault();
			$(this).closest('tr').remove();
		})

//button-edit .find("td")

$(document).on('click', '.button-edit', function(e) {
	e.preventDefault();
	 alertFunc();
	$(this).closest('tr').find("td");
})

function alertFunc() {

	var recipientName = $('#recipient-name');
	var recipientNumber = $('#recipient-number');
	var recipientMail = $('#recipient-mail');
	var modalOne = $('#modal-1');



	 modalOne.append($('<input>', {
		text: name.val()
	}))

}

})
	  // function addRow(id){
		//
		// 		var recipNaim = document.getElementById("recipient-name").value;
		//     var recipNumber = document.getElementById("recipient-number").value;
		//     var recipMail = document.getElementById("recipient-mail").value;
	  //     var tbody = document.getElementById(id).getElementsByTagName("TBODY")[0];
	  //     var row = document.createElement("TR")
	  //     var td1 = document.createElement("TD")
	  //     td1.appendChild(document.createTextNode(recipNaim))//"New User"
	  //     var td2 = document.createElement("TD")
	  //     td2.appendChild (document.createTextNode(recipNumber))//"Data User(number)"
	  //     var td3 = document.createElement("TD")
	  //     td3.appendChild (document.createTextNode(recipMail))//"Data User(Mail)"
	  //     var btn = document.createElement("BUTTON");
	  //     // var btn = document.getElementById('').innerHTML +=
	  //     // +'<div class="btn-group-vertical">'
	  //     // + '<button class="btn btn-warning">Редактировать</button>'
	  //     // + '<button class="btn  btn-danger">Удалить</button>'
	  //     // + '<div>';
	  //     row.appendChild(td1);
	  //     row.appendChild(td2);
	  //     row.appendChild(td3);
	  //     row.appendChild(btn);
	  //     tbody.appendChild(row);
		//
	  //   };



		// $(".button-edit").on("click", function(event, elem){
		// 		$(this).closest("tr").find("td").each(function(idx, itm){
		// 				alert(itm);
		// 		});
		// });

			// $('.button-delete').click(function(e) {
			// 		e.preventDefault();
			// 		$(this).closest('tr').remove(); // или $(this).parent().parent().remove();
			// });
