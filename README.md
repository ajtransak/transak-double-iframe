## Double iframe Integration

So whenever you're planning to do a `Double IFrame Integration` there are a couple of things that you need to take care of:

- Add `allow="camera;microphone;payment"` as attributes in both the enclosing and inner IFrames. In case you are not able to add it, the `Transak IFrame` automatically detects it and at the time of KYC, it provoides you with a unique `KYC Link` that you can use to complete the KYC. This unique URL is also emailed to the user on their specified Email ID in the previous screens.

### Demoes - Orders & KYC

- [Order with the KYC Flow](https://www.loom.com/share/15a0c396d3a84b04985f95e92e1076a1?sid=523898d0-760f-4a23-99d9-52c311a6dd70)

- [Order without the KYC Flow](https://www.loom.com/share/d6d1ef4991944954ba6891e5671a31bd?sid=be3610b3-93c0-4f43-b734-0d400724e769)

### Demo Applications

- [Transak Double IFrame](https://transak-double-iframe.vercel.app/)

- [Transak Double IFrame - Supporter](https://transak-double-iframe-supporter.vercel.app/)

  This application has two routes for IFrames:

  - [staging](https://transak-double-iframe-supporter.vercel.app/staging)
  - [production](https://transak-double-iframe-supporter.vercel.app/production)
