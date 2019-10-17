var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/ccNwuhv6mw8:APA91bHUOQp8PHZPCtrAhnHU7FOHsZJPJW_6UAL5pGOFC7oToww0Ls9JMlGdPXweeNKlgtsVmtWj9kXljSfohddowzCCJZZPc3EXihqz_UC9RAE_ympzfy5OFmBy2DMWGPkOoXs0Gepv",
    "keys": {
        "p256dh": "BLsz17i9TynDko+gx3oxxiHN85OY0iAr/G7povhj6/0NpoMVaWdGahKbfNaB1pIHxtNQRPeV8tBR2A4qPEa+eZY=", 
        "auth": "NPzSfjgiG6hvRlPvBvBBhg=="
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