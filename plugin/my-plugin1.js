$.fn.swapClass = function(class1, class2) {
    // this는 엘리먼트가 아니다.
    // this는 jQuery결과 집합객체다.
    this.removeClass(class1).addClass(class2);
    return this;
    
}

$.fn.table = function(obj) {
    var htmlContemt = "";
    
    // table header 만들기
    htmlContemt += "<thead>"
    htmlContemt += "<tr>"
    
    $.each(obj.headers, function(index, item) {
        htmlContemt += "<th>"+item+"</th>"
    })
    
    
    htmlContemt += "</tr>"
    htmlContemt += "</thead>"
    
    
    // table body 만들기
    htmlContemt += "<tbody>"
    
    // item ->> {name:"홍길동", phone:""}
    $.each(obj.data, function(index, item) {
        htmlContemt += "<tr>"
        
        // name -> "name" 혹은 "phone" 혹은 "email"
        $.each(obj.names, function(index, name) {
            htmlContemt += "<td>"+item[name]+"</td>"    
        })
        
        htmlContemt += "</tr>"
    })
    
    
    htmlContemt += "</tbody>"
    this.html(htmlContemt);
    
    return this;
}