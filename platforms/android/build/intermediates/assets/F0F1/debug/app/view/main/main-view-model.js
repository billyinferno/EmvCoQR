"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var observable_1 = require("data/observable");
var nativescript_barcodescanner_1 = require("nativescript-barcodescanner");
var base64 = require("base-64");
var utf8 = require("utf8");
var MainPageModel = (function (_super) {
    __extends(MainPageModel, _super);
    function MainPageModel() {
        var _this = _super.call(this) || this;
        _this.scanner = new nativescript_barcodescanner_1.BarcodeScanner();
        return _this;
    }
    MainPageModel.prototype.scanQR = function () {
        var qrResult;
        var qrStatus;
        qrStatus = false;
        // scan the QR code here
        this.scanner.scan({
            formats: "QR_CODE, EAN_13",
            cancelLabel: "EXIT From Scanner",
            cancelLabelBackgroundColor: "#333333",
            message: "Use volume button for extra light.",
            showFlipCameraButton: false,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            closeCallback: function () { console.log("QR Scanner Closed"); },
            resultDisplayDuration: 500,
            openSettingsIfPermissionWasPreviouslyDenied: true
        }).then(function (result) {
            qrResult = result.text;
            qrStatus = true;
            console.log("Result -> " + qrResult);
            setTimeout(function () {
                // if this alert doesn't show up please upgrade to {N} 2.4.0+
                alert({
                    title: "Scan result",
                    message: "Format: " + result.format + ",\nValue: " + result.text,
                    okButtonText: "OK"
                });
                // convert the result into Base64 encode
                console.log(base64.encode(utf8.encode(result.text)));
            }, 500);
        }, function (error) {
            console.log("Error while scan, " + error);
        });
    };
    MainPageModel.prototype.generateQR = function () {
        // go to the new page for generating the QR
    };
    return MainPageModel;
}(observable_1.Observable));
exports.MainPageModel = MainPageModel;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi12aWV3LW1vZGVsLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi12aWV3LW1vZGVsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsOENBQTJDO0FBQzNDLDJFQUEwRTtBQUUxRSxnQ0FBa0M7QUFDbEMsMkJBQTZCO0FBRTdCO0lBQW1DLGlDQUFVO0lBR3pDO1FBQUEsWUFDSSxpQkFBTyxTQUVWO1FBREcsS0FBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLDRDQUFjLEVBQUUsQ0FBQzs7SUFDeEMsQ0FBQztJQUVNLDhCQUFNLEdBQWI7UUFDSSxJQUFJLFFBQVEsQ0FBQztRQUNiLElBQUksUUFBUSxDQUFDO1FBRWIsUUFBUSxHQUFHLEtBQUssQ0FBQztRQUNqQix3QkFBd0I7UUFDeEIsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUM7WUFDZCxPQUFPLEVBQUMsaUJBQWlCO1lBQ3pCLFdBQVcsRUFBQyxtQkFBbUI7WUFDL0IsMEJBQTBCLEVBQUUsU0FBUztZQUNyQyxPQUFPLEVBQUMsb0NBQW9DO1lBQzVDLG9CQUFvQixFQUFFLEtBQUs7WUFDM0IsaUJBQWlCLEVBQUUsS0FBSztZQUN4QixlQUFlLEVBQUUsSUFBSTtZQUNyQixVQUFVLEVBQUUsSUFBSTtZQUNoQixPQUFPLEVBQUUsS0FBSztZQUNkLGFBQWEsRUFBQyxjQUFPLE9BQU8sQ0FBQyxHQUFHLENBQUMsbUJBQW1CLENBQUMsQ0FBQSxDQUFBLENBQUM7WUFDdEQscUJBQXFCLEVBQUMsR0FBRztZQUN6QiwyQ0FBMkMsRUFBQyxJQUFJO1NBQ25ELENBQUMsQ0FBQyxJQUFJLENBQ0gsVUFBQyxNQUFNO1lBQ0gsUUFBUSxHQUFHLE1BQU0sQ0FBQyxJQUFJLENBQUM7WUFDdkIsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLFlBQVksR0FBRyxRQUFRLENBQUMsQ0FBQztZQUNyQyxVQUFVLENBQUM7Z0JBQ1AsNkRBQTZEO2dCQUM3RCxLQUFLLENBQUM7b0JBQ0osS0FBSyxFQUFFLGFBQWE7b0JBQ3BCLE9BQU8sRUFBRSxVQUFVLEdBQUcsTUFBTSxDQUFDLE1BQU0sR0FBRyxZQUFZLEdBQUcsTUFBTSxDQUFDLElBQUk7b0JBQ2hFLFlBQVksRUFBRSxJQUFJO2lCQUNuQixDQUFDLENBQUM7Z0JBQ0gsd0NBQXdDO2dCQUN4QyxPQUFPLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxDQUFDO1lBQ3ZELENBQUMsRUFBRSxHQUFHLENBQUMsQ0FBQztRQUNkLENBQUMsRUFBQyxVQUFDLEtBQUs7WUFDSixPQUFPLENBQUMsR0FBRyxDQUFDLG9CQUFvQixHQUFHLEtBQUssQ0FBQyxDQUFDO1FBQzlDLENBQUMsQ0FDSixDQUFDO0lBQ04sQ0FBQztJQUVNLGtDQUFVLEdBQWpCO1FBQ0ksMkNBQTJDO0lBQy9DLENBQUM7SUFDTCxvQkFBQztBQUFELENBQUMsQUFuREQsQ0FBbUMsdUJBQVUsR0FtRDVDO0FBbkRZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtPYnNlcnZhYmxlfSBmcm9tICdkYXRhL29ic2VydmFibGUnO1xuaW1wb3J0IHsgQmFyY29kZVNjYW5uZXIsIFNjYW5PcHRpb25zIH0gZnJvbSAnbmF0aXZlc2NyaXB0LWJhcmNvZGVzY2FubmVyJztcbmltcG9ydCB7IHRyYWNlQ2F0ZWdvcmllcyB9IGZyb20gJ3Rucy1jb3JlLW1vZHVsZXMvdWkvZnJhbWUvZnJhbWUnO1xuaW1wb3J0ICogYXMgYmFzZTY0IGZyb20gXCJiYXNlLTY0XCI7XG5pbXBvcnQgKiBhcyB1dGY4IGZyb20gXCJ1dGY4XCI7XG5cbmV4cG9ydCBjbGFzcyBNYWluUGFnZU1vZGVsIGV4dGVuZHMgT2JzZXJ2YWJsZSB7XG4gICAgcHJpdmF0ZSBzY2FubmVyOiBCYXJjb2RlU2Nhbm5lcjtcblxuICAgIGNvbnN0cnVjdG9yKCkge1xuICAgICAgICBzdXBlcigpO1xuICAgICAgICB0aGlzLnNjYW5uZXIgPSBuZXcgQmFyY29kZVNjYW5uZXIoKTtcbiAgICB9XG5cbiAgICBwdWJsaWMgc2NhblFSKCkge1xuICAgICAgICB2YXIgcXJSZXN1bHQ7XG4gICAgICAgIHZhciBxclN0YXR1cztcblxuICAgICAgICBxclN0YXR1cyA9IGZhbHNlO1xuICAgICAgICAvLyBzY2FuIHRoZSBRUiBjb2RlIGhlcmVcbiAgICAgICAgdGhpcy5zY2FubmVyLnNjYW4oe1xuICAgICAgICAgICAgZm9ybWF0czpcIlFSX0NPREUsIEVBTl8xM1wiLFxuICAgICAgICAgICAgY2FuY2VsTGFiZWw6XCJFWElUIEZyb20gU2Nhbm5lclwiLFxuICAgICAgICAgICAgY2FuY2VsTGFiZWxCYWNrZ3JvdW5kQ29sb3I6IFwiIzMzMzMzM1wiLCAgICAgICAgLy8gZm9yIGlPUyB1c2VyIG9ubHlcbiAgICAgICAgICAgIG1lc3NhZ2U6XCJVc2Ugdm9sdW1lIGJ1dHRvbiBmb3IgZXh0cmEgbGlnaHQuXCIsIC8vIGZvciBBbmRyb2lkIHVzZXIgb25seVxuICAgICAgICAgICAgc2hvd0ZsaXBDYW1lcmFCdXR0b246IGZhbHNlLFxuICAgICAgICAgICAgcHJlZmVyRnJvbnRDYW1lcmE6IGZhbHNlLFxuICAgICAgICAgICAgc2hvd1RvcmNoQnV0dG9uOiB0cnVlLFxuICAgICAgICAgICAgYmVlcE9uU2NhbjogdHJ1ZSxcbiAgICAgICAgICAgIHRvcmNoT246IGZhbHNlLFxuICAgICAgICAgICAgY2xvc2VDYWxsYmFjazooKSA9PiB7Y29uc29sZS5sb2coXCJRUiBTY2FubmVyIENsb3NlZFwiKX0sXG4gICAgICAgICAgICByZXN1bHREaXNwbGF5RHVyYXRpb246NTAwLFxuICAgICAgICAgICAgb3BlblNldHRpbmdzSWZQZXJtaXNzaW9uV2FzUHJldmlvdXNseURlbmllZDp0cnVlXG4gICAgICAgIH0pLnRoZW4oXG4gICAgICAgICAgICAocmVzdWx0KSA9PiB7XG4gICAgICAgICAgICAgICAgcXJSZXN1bHQgPSByZXN1bHQudGV4dDtcbiAgICAgICAgICAgICAgICBxclN0YXR1cyA9IHRydWU7XG4gICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCJSZXN1bHQgLT4gXCIgKyBxclJlc3VsdCk7XG4gICAgICAgICAgICAgICAgc2V0VGltZW91dChmdW5jdGlvbiAoKSB7XG4gICAgICAgICAgICAgICAgICAgIC8vIGlmIHRoaXMgYWxlcnQgZG9lc24ndCBzaG93IHVwIHBsZWFzZSB1cGdyYWRlIHRvIHtOfSAyLjQuMCtcbiAgICAgICAgICAgICAgICAgICAgYWxlcnQoe1xuICAgICAgICAgICAgICAgICAgICAgIHRpdGxlOiBcIlNjYW4gcmVzdWx0XCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWVzc2FnZTogXCJGb3JtYXQ6IFwiICsgcmVzdWx0LmZvcm1hdCArIFwiLFxcblZhbHVlOiBcIiArIHJlc3VsdC50ZXh0LFxuICAgICAgICAgICAgICAgICAgICAgIG9rQnV0dG9uVGV4dDogXCJPS1wiXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAvLyBjb252ZXJ0IHRoZSByZXN1bHQgaW50byBCYXNlNjQgZW5jb2RlXG4gICAgICAgICAgICAgICAgICAgIGNvbnNvbGUubG9nKGJhc2U2NC5lbmNvZGUodXRmOC5lbmNvZGUocmVzdWx0LnRleHQpKSk7XG4gICAgICAgICAgICAgICAgICB9LCA1MDApO1xuICAgICAgICAgICAgfSwoZXJyb3IpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhcIkVycm9yIHdoaWxlIHNjYW4sIFwiICsgZXJyb3IpO1xuICAgICAgICAgICAgfVxuICAgICAgICApO1xuICAgIH1cblxuICAgIHB1YmxpYyBnZW5lcmF0ZVFSKCkge1xuICAgICAgICAvLyBnbyB0byB0aGUgbmV3IHBhZ2UgZm9yIGdlbmVyYXRpbmcgdGhlIFFSXG4gICAgfVxufSJdfQ==