<?php
include('classes/Mailchimp.class.php');

$MailChimp = new MailChimp('558bbba10912d1979ea9fb9d733499e8-us7');

$result = $MailChimp->call('lists/subscribe', array(
	'id'				=> 'f5a939683e',
    'email'             => array('email'=>$_POST['email']),
    'double_optin'      => false,
    'update_existing'   => true,
    'replace_interests' => false,
    'send_welcome'      => true,
));

if(isset($result['euid']) and isset($result['leid'])) echo 'Alright! You\'ll be notified on <b>'.$_POST['email'].'</b> :)';
else echo 'Oops! Something went wrong. Please try again.';