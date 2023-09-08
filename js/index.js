$(document).ready(function () {
    let selectedElement = null;

    $('.domTree').on('click', 'div', function (event) {
        if (selectedElement) {
            $(selectedElement).removeClass('selected');
        }
        selectedElement = this;
        $(selectedElement).addClass('selected');
        event.stopPropagation();

    });

    $('body').on('click', '.domTree', function (event) {
        if (selectedElement) {
            $(selectedElement).removeClass('selected');
        }

        selectedElement = null;
        event.stopPropagation();

    });

    $('#removeBtn').on('click', function () {
        if (selectedElement) {
            $(selectedElement).remove();
            selectedElement = null;
        } else {
            alert('Selecione um elemento para remover!');
        }
    });

    // 2) Adicionar elemento filho
    $('#addBtn').on('click', function () {
        const newElemContent = $('#newElemContent').val();
        if (selectedElement && newElemContent) {
            const newElem = $('<div class="item"></div>').text(newElemContent);
            $(selectedElement).append(newElem);
            $('#newElemContent').val('');
        }
        else if(newElemContent) {
            const newElem = $('<div class="item"></div>').text(newElemContent);
            $('.domTree').append(newElem);
            $('#newElemContent').val('');
        }
        else {
            alert('Selecione um elemento e/ou preencha o conteúdo para o novo elemento!');
        }
    });

});

// $(document).ready(function() {
//     let selectedElement = null;

//     $('.domTree').on('click', '*', function(event) {
//         $('.selected').removeClass('selected');
//         $(this).addClass('selected');
//         selectedElement = $(this);
//         event.stopPropagation();
//     });

//     $(document).keyup(function(event) {
//         if (selectedElement) {
//             switch (event.key) {
//                 case 'Delete':
//                     selectedElement.remove();
//                     selectedElement = null;
//                     break;
//                 case 'Insert':
//                     selectedElement.append('<div class="item">Novo Elemento</div>');
//                     break;
//                 case 'Enter':
//                     let newText = prompt("Digite o novo texto:", selectedElement.text());
//                     if (newText !== null) {
//                         selectedElement.text(newText);
//                     }
//                     break;
//             }
//         }
//     });
// });