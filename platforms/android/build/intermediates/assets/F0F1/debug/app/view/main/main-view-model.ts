import {Observable} from 'data/observable';
import { BarcodeScanner, ScanOptions } from 'nativescript-barcodescanner';
import { traceCategories } from 'tns-core-modules/ui/frame/frame';
import * as base64 from "base-64";
import * as utf8 from "utf8";

export class MainPageModel extends Observable {
    private scanner: BarcodeScanner;

    constructor() {
        super();
        this.scanner = new BarcodeScanner();
    }

    public scanQR() {
        var qrResult;
        var qrStatus;

        qrStatus = false;
        // scan the QR code here
        this.scanner.scan({
            formats:"QR_CODE, EAN_13",
            cancelLabel:"EXIT From Scanner",
            cancelLabelBackgroundColor: "#333333",        // for iOS user only
            message:"Use volume button for extra light.", // for Android user only
            showFlipCameraButton: false,
            preferFrontCamera: false,
            showTorchButton: true,
            beepOnScan: true,
            torchOn: false,
            closeCallback:() => {console.log("QR Scanner Closed")},
            resultDisplayDuration:500,
            openSettingsIfPermissionWasPreviouslyDenied:true
        }).then(
            (result) => {
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
            },(error) => {
                console.log("Error while scan, " + error);
            }
        );
    }

    public generateQR() {
        // go to the new page for generating the QR
    }
}