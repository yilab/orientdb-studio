if (!String.prototype.startsWith) {
    Object.defineProperty(String.prototype, 'startsWith', {
        enumerable: false,
        configurable: false,
        writable: false,
        value: function (searchString, position) {
            position = position || 0;
            return this.indexOf(searchString, position) === position;
        }
    });
}
if(!String.prototype.contains)
    String.prototype.contains = function(str, startIndex) { return -1 !== String.prototype.indexOf.call(this, str, startIndex); };
var Utilities = {};


Utilities.confirm = function ($scope, $modal,$q, params) {


    if (params) {
        var modalScope = $scope.$new(true);
        modalScope.title = params.title;
        modalScope.msg = params.body;
        modalScope.confirm = function(){
            params.success();
            modalScope.hide();
        }

        var modalPromise = $modal({template: 'views/modal/yesno.html', persist: true, show: false, backdrop: 'static',scope: modalScope,modalClass : ''});
        $q.when(modalPromise).then(function(modalEl) {
            modalEl.modal('show');
        });
        /*var title = params.title;
        var msg = params.body;
        var btns = [
            {result: 'cancel', label: 'Cancel'},
            {result: 'ok', label: 'OK', cssClass: 'btn-primary'}
        ];
        var d = $dialog.messageBox(title, msg, btns);
        d.open().then(function (result) {
            if (result == 'ok') {
                params.success();
            }
        });*/
    }
}

