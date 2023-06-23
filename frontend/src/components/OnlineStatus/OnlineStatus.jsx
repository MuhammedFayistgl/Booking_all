import { Notification, useToaster, Message } from 'rsuite';
import React, { useEffect, useState } from "react";






const OnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine);

    useEffect(() => {
        function onlineHandler() {
            setIsOnline(true);
        }

        function offlineHandler() {
            setIsOnline(false);
        }

        window.addEventListener("online", onlineHandler);
        window.addEventListener("offline", offlineHandler);


        return () => {
            window.removeEventListener("online", onlineHandler);
            window.removeEventListener("offline", offlineHandler);
        };
    }, [isOnline]);


    return (
        <div>
            {!isOnline && (<>
                <Notification closable type="error" style={{ zIndex: 99999 }} >
                    <Message showIcon type="error">
                        You are offline. Please check your internet connection.
                    </Message>
                </Notification>
            </>

            )

            }
        </div>
    );
}




export default OnlineStatus