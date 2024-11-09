<?php

    class Email {
    
        public static function send_local_email(string $from, string $to, string $subject, string $message): bool {

            if(file_exists(ROOT_DOCUMENT . '/email_template.html')) {


                $headers = 'MIME-Version: 1.0' . "\r\n";
                $headers .= 'Content-type:text/html;charset=UTF-8' . "\r\n";
                $headers .= "From: " . APP_NAME . " <$from>" . "\r\n";
    
                $template = file_get_contents(ROOT_DOCUMENT . '/email_template.html');
                $template = str_replace('{{email.subject}}', $subject, $template);
                $template = str_replace('{{email.to}}', $to, $template);
                $template = str_replace('{{email.message}}', $message, $template);
                $template = str_replace('{{host.address}}', $GLOBALS['HOST'], $template);
                $template = str_replace('{{host.name}}', APP_NAME, $template);
    
                if(@mail($to, $subject, $template, $headers)) {
                    return true;
                }


            } else {
                error_log('Email template does not exist');
            }


            return false;
        }

    }