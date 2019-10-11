var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/d7tgrSBucCA:APA91bFa99mN-DNAcj1aUZ3nPm1536_MgOHFFaz_F9R-mh89PXGChMiRFYeLtkMsEEXgAunrm6dWnlvGWPwhe_dRf4OVGvfDmELX_4dYEoIJkNKNCsp7pyhDxXtyVuD974xP-445EJij",
    "keys": {
        "p256dh": "BHhrlRbgbYYR+wXJ5E8/y1SZ+Kyphjp6/xFQ6e1+tTMo/91BT18BRUAKRpbAT1PZkwXQb5QwAYchDAFKkjQTK1g=", 
        "auth": "oTH33p80Pkh1uOM0rcJong=="
    }
};
var payload = 'Here is a payload!';
var options = {
    gcmAPIKey: '852156028468',
    TTL: 60
};
webPush.sendNotification(
    pushSubscription,
    payload,
    options
);