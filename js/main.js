var count = 1
$('.itemOpener').click(function () {
    count++
    $('.items' + count).show(200)
})