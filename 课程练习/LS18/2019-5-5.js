Array.prototype.filtersapce = function(){
    var arr1 = this;
    var result = arr1.map(function(value){
        return value.trim();
    });
    return result;
}