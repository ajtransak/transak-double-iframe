## Double iframe Integration

You can use the below example code to establish a parent-child iframe scenario with `Transak` widget directly into a page of your web app.

In case of `Double IFrame Integration` there are a couple of things that you need to take care of:

- Add allow="camera;microphone;payment" as attributes in both the enclosing and inner iframes. In case you are not able to add it, the Transak iframe automatically detects it and at the time of KYC, it provides you with a unique KYC Link that you can use to complete the KYC. This unique URL is also emailed to the user on their specified Email ID in the previous screens.


### Preview Videos - Orders & KYC

- [Order with the KYC Flow](https://www.loom.com/share/15a0c396d3a84b04985f95e92e1076a1?sid=523898d0-760f-4a23-99d9-52c311a6dd70)

- [Order without the KYC Flow](https://www.loom.com/share/d6d1ef4991944954ba6891e5671a31bd?sid=be3610b3-93c0-4f43-b734-0d400724e769)

### Live Applications

- [Transak Double IFrame - Live on Vercel](https://transak-double-iframe.vercel.app/)
