//EXECUTA A FUNÇÃO AJAX AO CLIQUE DO BOTÃO
document.querySelector('#btnPost').addEventListener('click', function () {
    $('#outputResultado').text('');
    var btn = $(this);
    btn.button('loading');
    $.ajax({
        url: 'http://localhost:38292/Testando/ActionPost',
        method: 'POST',
        data: { valor: $('#txtText').val() },
        statusCode: {
            404: function(resultado) {
                $('#txtText').val('');
                $('#outputResultado').text('Status Message: ' + resultado.statusCode + ' - ' + resultado.statusMessage);
                btn.button('reset');

            },
            500: function(resultado) {
                $('#txtText').val('');
                $('#outputResultado').text('Status Message: ' + resultado.statusCode + ' - ' + resultado.statusMessage);
                btn.button('reset');
            }
        },
        success: function(resultado) {
            $('#txtText').val('').focus();
            $('#outputResultado').text('A informação que você enviou foi: ' + resultado);
            btn.button('reset');
        }
    });
});

document.querySelector('#btnPostTable').addEventListener('click', function () {
    var btn = $(this);
    btn.button('loading');
    $.ajax({
        url: 'http://localhost:38292/Testando/ActionGraphsPost',
        method: 'POST',
        statusCode: {
            404: function(resultado) {
                $('#outputResultado').text('Status Message: ' + resultado.statusCode + ' - ' + resultado.statusMessage);
                btn.button('reset');

            },
            500: function(resultado) {
                $('#outputResultado').text('Status Message: ' + resultado.statusCode + ' - ' + resultado.statusMessage);
                btn.button('reset');
            }
        },
        success: function (resultado) {
            $('#tableResultado').css('display', 'block');
            var tabela = $('#tableResultado').dynatable({
                features: {
                    paginate: true,
                    recordCount: false,
                    sorting: false,
                    search: false
                },
                dataset: {
                    records: resultado
                }
            }).data('dynatable');
            tabela.records.init();
            tabela.process();


            btn.button('reset');
        }
    });
});


