var head = $request.headers;
var ua = head['User-Agent'];

if (ua.indexOf('Fileball') != -1) {
    Body = {"request_date":"1983-03-15T00:00:00Z","request_date_ms":416505600000,"subscriber":{"entitlements":{"filebox_pro":{"expires_date":null,"grace_period_expires_date":null,"product_identifier":"filebox_pro","purchase_date":"1983-03-15T00:00:00Z"}},"first_seen":"1983-03-15T00:00:00Z","last_seen":"1983-03-15T00:00:00Z","management_url":null,"non_subscriptions":{"filebox_pro":[{"id":"yingzi","is_sandbox":false,"original_purchase_date":"1983-03-15T00:00:00Z","purchase_date":"1983-03-15T00:00:00Z","store":"app_store"}]},"original_app_user_id":"$RCAnonymousID%3A8e5a11e56b4246f2ab2b17058c01db1e","original_application_version":"170","original_purchase_date":"1983-03-15T00:00:00Z","other_purchases":{"filebox_pro":{"purchase_date":"1983-03-15T00:00:00Z"}},"subscriptions":{}}};
}

if (ua.indexOf('Taio') != -1) {
    Body = {"request_date_ms":1660324774251,"request_date":"2022-08-12T17:19:34Z","subscriber":{"non_subscriptions":{},"first_seen":"2022-08-12T16:17:04Z","original_application_version":"1052","other_purchases":{},"management_url":"https:\/\/apps.apple.com\/account\/subscriptions","subscriptions":{"taio_1499_1y_2w0_std_v2":{"is_sandbox":false,"ownership_type":"PURCHASED","billing_issues_detected_at":null,"period_type":"trial","expires_date":"2029-08-26T16:28:27Z","grace_period_expires_date":null,"unsubscribe_detected_at":null,"original_purchase_date":"2022-08-12T16:28:27Z","purchase_date":"2022-08-12T16:28:27Z","store":"app_store"}},"entitlements":{"full-version":{"grace_period_expires_date":null,"purchase_date":"2022-08-12T16:28:27Z","product_identifier":"taio_1499_1y_2w0_std_v2","expires_date":"2029-08-26T16:28:27Z"}},"original_purchase_date":"2022-08-12T16:16:50Z","original_app_user_id":"$RCAnonymousID:3eb1216e78ca4771948cfd0a8569858","last_seen":"2022-08-12T16:17:04Z"}};
}

if (ua.indexOf('Photo') != -1) {
    Body = {"request_date_ms":"1581750589992","request_date":"2020-02-15T07:09:49Z","subscriber":{"non_subscriptions":{},"first_seen":"2020-02-14T20:28:01Z","original_application_version":"216","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","original_purchase_date":"2020-02-15T07:07:58Z","purchase_date":"2020-02-15T07:07:58Z","store":"app_store"}},"entitlements":{"premium":{"expires_date":"2099-03-15T00:00:00Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"original_purchase_date":"2020-02-14T20:26:59Z","original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","last_seen":"2020-02-14T20:28:01Z"}};
}

if (ua.indexOf('Pillow') != -1) {
    Body = {"request_date_ms":"1581750589992","request_date":"2020-02-15T07:09:49Z","subscriber":{"non_subscriptions":{},"first_seen":"2020-02-14T20:28:01Z","original_application_version":"216","other_purchases":{},"subscriptions":{"com.neybox.pillow.premium.year":{"is_sandbox":false,"period_type":"trial","billing_issues_detected_at":null,"unsubscribe_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","original_purchase_date":"2020-02-15T07:07:58Z","purchase_date":"2020-02-15T07:07:58Z","store":"app_store"}},"entitlements":{"premium":{"expires_date":"2099-03-15T00:00:00Z","product_identifier":"com.neybox.pillow.premium.year","purchase_date":"2020-02-15T07:07:58Z"}},"original_purchase_date":"2020-02-14T20:26:59Z","original_app_user_id":"D1D6D98B-EF51-48AF-9876-7352ABCEFD60","last_seen":"2020-02-14T20:28:01Z"}};
}

if (ua.indexOf('VSCO') != -1) {
    Body = {"request_date":"2022-08-22T15:45:13Z","request_date_ms":1661183113727,"subscriber":{"entitlements":{"membership":{"expires_date":"2099-03-15T00:00:00Z","grace_period_expires_date":null,"product_identifier":"vsco_global_2999_annual_7D_free","purchase_date":"2022-08-22T15:42:10Z"}},"first_seen":"2022-08-22T15:29:41Z","last_seen":"2022-08-22T15:30:16Z","management_url":"https://apps.apple.com/account/subscriptions","non_subscriptions":{},"original_app_user_id":"$RCAnonymousID:7bb196482332456a92f0883d972bc680","original_application_version":"4396","original_purchase_date":"2022-08-22T15:27:36Z","other_purchases":{},"subscriptions":{"vsco_global_2999_annual_7D_free":{"billing_issues_detected_at":null,"expires_date":"2099-03-15T00:00:00Z","grace_period_expires_date":null,"is_sandbox":false,"original_purchase_date":"2022-08-22T15:42:11Z","ownership_type":"PURCHASED","period_type":"trial","purchase_date":"2022-08-22T15:42:10Z","store":"app_store","unsubscribe_detected_at":null}}}};
}

Status = 'HTTP/1.1 200 OK';
Headers = {"Content-Type": "application/json"};

const Response = {
    status: Status,
    headers: Headers,
    body: JSON.stringify(Body)
};

$done(Response);
