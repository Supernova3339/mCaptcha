--  mark a notification as read
UPDATE mcaptcha_notifications
    SET read_notification = TRUE
WHERE 
    mcaptcha_notifications.id = ?
AND
    mcaptcha_notifications.rx = (
        SELECT
            id
        FROM
            mcaptcha_users
        WHERE
        name = ?
    );
