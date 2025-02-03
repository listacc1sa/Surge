#!name=local
#!desc=local

[Script]
https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://github.com/osinx/Script/raw/refs/heads/main/vip/revenuecat.js^https:\/\/api\.revenuecat\.com\/.+\/(receipts$|subscribers\/[^/]+$) url script-response-body https://github.com/osinx/Script/raw/refs/heads/main/vip/revenuecat.js
^https:\/\/api\.revenuecat\.com\/.+\/subscribers\/[^/]+/(offerings|attributes)$ url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2
^https:\/\/api\.revenuecat\.com\/.+\/(receipts|subscribers) url request-header (\r\n)X-RevenueCat-ETag:.+(\r\n) request-header $1X-RevenueCat-ETag:$2

apphud = type=http-response, pattern=https:\/\/api\.apphud\.com\/v1\/(subscriptions|customers), script-path=https://raw.githubusercontent.com/sultan1sa/AllinOneRewrite-/main/Apphud.js, requires-body=true, script-update-interval=0, timeout=10

mail10 = type=http-response, pattern=api.qonversion.io/v1/user/init, script-path=https://raw.githubusercontent.com/sultan1sa/AllinOneRewrite-/main/10mail.js, requires-body=true, script-update-interval=0, timeout=10

chat Uncensored = type=http-response, pattern=https://api.adapty.io/api/v1/sdk/in-apps/apple/receipt/validate/, script-path=https://raw.githubusercontent.com/sultan1sa/AllinOneRewrite-/main/ChatUncensored.js, requires-body=true, script-update-interval=0, timeout=10


[MITM]
hostname = %APPEND% api.revenuecat.com, api.adapty.io, api.qapi.qonversion.io, api.apphud.com