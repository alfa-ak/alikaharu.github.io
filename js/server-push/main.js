var webPush = require('web-push');
var pushSubscription = {
    "endpoint": "https://fcm.googleapis.com/fcm/send/dC1JKNsbhTw:APA91bHjk1DkjRCpZcIbncS0uxuPoiG7miAm2X7a4cxf72juYN2Zu02PvaZc79N_cKyFLO6_LLVqckiIKfONsMl47AOFO3rABJ2BdY5i9OT5eqR71XXFAIQm7uktvRta1i2e_YJBPtLM",
    "keys": {
        "p256dh": "BKDWzAHg2a71maQukoXHl1WmfPuvh6DPa5YzPaE6uHlkBgrsKwBA1i5VUfwuVsMBIOpQUbYGDRlhuhGVjbZP3lo=",
        "auth": "xaAgaCzf87imRYX9R5Foew=="
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