$.sum = function(arr) {
    var total = 0;
    $.each(arr, function(index, item) {
        total += parseFloat(item);
    });
    return total;
}

$.avg = function(arr) {
    return $.sum(arr)/arr.length;
}