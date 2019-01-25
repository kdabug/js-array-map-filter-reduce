// Create a function called `getThursdayTurnstileLogs`
// that accepts an array of logs, and returns a new array
// that only contains turnstile logs from Thursday.
// Hint:  check out String.prototype.includes from the mdn docs
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/includes

const turnstileLogs = [
  "Sat Nov 03 2012 10:10:11 - Dr. Olaf Emard went through the turnstile",
  "Wed May 16 2018 23:18:22 - Mason Carroll went through the turnstile",
  "Sat Apr 23 2011 17:08:21 - Annette Kling DDS went through the turnstile",
  "Mon Dec 06 2010 10:04:26 - Ryann Ziemann went through the turnstile",
  "Fri Mar 13 2015 23:07:33 - Noemi Haag went through the turnstile",
  "Sun Oct 05 2008 09:43:50 - Agustin Halvorson went through the turnstile",
  "Sat May 07 2016 10:16:26 - Cale Hartmann went through the turnstile",
  "Thu Oct 22 2015 05:12:52 - Ramiro Douglas went through the turnstile",
  "Tue Jan 27 2015 17:59:29 - Savanna Friesen went through the turnstile",
  "Sun Feb 11 2018 10:42:58 - Fanny Goyette went through the turnstile",
  "Sat Oct 08 2011 20:23:56 - Ms. Myrtle VonRueden went through the turnstile",
  "Thu Apr 05 2018 19:28:59 - Bailee Johnston went through the turnstile",
  "Wed Aug 26 2015 06:36:05 - Mr. Rodrigo Blanda went through the turnstile",
  "Wed Nov 11 2009 13:38:51 - River Quigley went through the turnstile",
  "Sat May 14 2016 16:42:46 - Frances Nicolas went through the turnstile",
  "Thu Apr 07 2016 16:26:18 - Guiseppe Gutkowski went through the turnstile",
  "Sat Mar 24 2018 14:28:25 - Mazie O'Kon IV went through the turnstile",
  "Sat Aug 28 2010 14:04:24 - Elenora Barrows went through the turnstile",
  "Tue Apr 28 2015 00:14:52 - Mrs. Selina Hansen went through the turnstile",
  "Thu Apr 23 2015 02:44:10 - Kory Bahringer went through the turnstile",
  "Fri Apr 13 2018 19:38:09 - Donnie Dickens went through the turnstile",
  "Sun May 13 2012 21:31:27 - Kenton Shields Sr. went through the turnstile",
  "Thu Oct 19 2017 11:27:51 - Caden Langworth went through the turnstile",
  "Wed Jan 13 2010 03:25:53 - Flo Hoppe went through the turnstile",
  "Sat Feb 27 2010 09:12:55 - Mara Stanton went through the turnstile",
  "Fri Oct 28 2016 12:51:02 - Jorge Murray went through the turnstile",
  "Tue Nov 29 2011 00:39:40 - Mazie Little went through the turnstile",
  "Thu Jan 14 2010 12:57:41 - Ms. Rae Stark went through the turnstile",
  "Thu Jun 28 2018 15:03:22 - Eugene Halvorson went through the turnstile",
  "Mon Dec 12 2011 09:05:30 - Jeremie Rutherford went through the turnstile",
  "Tue Mar 10 2015 17:19:27 - Michelle Von went through the turnstile",
  "Mon Mar 29 2010 10:45:20 - Dannie Murazik went through the turnstile",
  "Thu Nov 26 2009 05:37:36 - Miss Elody Bode went through the turnstile",
  "Fri Apr 27 2018 19:07:38 - Felicia Buckridge went through the turnstile",
  "Mon Jun 13 2016 14:34:15 - Cleora Pfannerstill went through the turnstile",
  "Sun Nov 13 2016 13:56:15 - Eric Lewis went through the turnstile",
  "Sat Jun 23 2012 08:45:00 - Lewis Treutel Sr. went through the turnstile",
  "Sat Dec 10 2016 02:33:39 - Riley Kessler went through the turnstile",
  "Wed Apr 03 2013 03:18:35 - Keyshawn Sawayn went through the turnstile",
  "Wed Jan 17 2018 19:29:35 - Lavonne Armstrong went through the turnstile",
  "Tue May 31 2011 20:43:01 - Shanna Schinner went through the turnstile",
  "Sun Jan 16 2011 04:15:57 - Max Olson went through the turnstile",
  "Mon Sep 02 2013 21:48:09 - Eino McDermott went through the turnstile",
  "Mon Jan 09 2012 19:24:09 - Lavina Waters II went through the turnstile",
  "Sat Dec 06 2014 15:49:38 - Electa Gulgowski went through the turnstile",
  "Mon Mar 21 2011 22:09:37 - Otis Abshire went through the turnstile",
  "Sun Feb 26 2012 04:05:21 - Brett Keeling went through the turnstile",
  "Sun Jun 09 2013 06:11:24 - Jeff Satterfield went through the turnstile",
  "Mon Jan 07 2013 17:17:04 - Benton Trantow went through the turnstile",
  "Sun Jun 27 2010 16:04:23 - Olaf Zboncak DDS went through the turnstile",
  "Sun Apr 23 2017 17:24:39 - Gerald Wolf went through the turnstile",
  "Fri Nov 20 2009 16:41:27 - Christy Schmitt II went through the turnstile",
  "Wed Aug 20 2008 23:11:06 - Alfredo Franecki went through the turnstile",
  "Thu Sep 05 2013 22:29:06 - Mariela Bogan went through the turnstile",
  "Sun Aug 21 2016 23:27:16 - Nellie Sipes went through the turnstile",
  "Mon Mar 21 2011 14:11:59 - Maurine Erdman went through the turnstile",
  "Thu Sep 25 2008 01:37:48 - Ward Maggio went through the turnstile",
  "Mon Jul 06 2015 03:43:09 - Wallace Schamberger went through the turnstile",
  "Mon Jul 20 2015 03:37:36 - Mr. Andreanne Krajcik went through the turnstile",
  "Fri Sep 21 2012 21:40:35 - Sallie Torphy went through the turnstile",
  "Mon Jun 29 2015 16:29:44 - Evie Gorczany went through the turnstile",
  "Mon Jun 08 2009 23:13:33 - Robyn Gerhold went through the turnstile",
  "Tue Apr 05 2016 23:27:56 - Mohamed Hagenes went through the turnstile",
  "Tue Mar 15 2011 21:08:07 - Queenie Purdy V went through the turnstile",
  "Sun Nov 02 2008 01:29:57 - Mr. Riley Tromp went through the turnstile",
  "Thu Aug 17 2017 22:28:53 - Lafayette Corkery went through the turnstile",
  "Mon Jun 27 2016 14:35:38 - Maynard Toy went through the turnstile",
  "Fri Jul 08 2016 19:09:08 - Lois Tillman went through the turnstile",
  "Sat Feb 19 2011 20:08:48 - Dominic Bauch went through the turnstile",
  "Tue Nov 28 2017 16:55:56 - Ms. Warren Erdman went through the turnstile",
  "Thu Dec 18 2014 08:03:51 - Heaven Nitzsche went through the turnstile",
  "Sun Aug 08 2010 01:07:48 - Raphael Gibson went through the turnstile",
  "Sat Feb 16 2013 06:07:50 - Vernie Mitchell went through the turnstile",
  "Mon Mar 31 2014 01:09:32 - Mrs. Bridget Hilll went through the turnstile",
  "Wed Nov 18 2009 09:28:07 - Hellen Wehner went through the turnstile",
  "Tue Jan 14 2014 08:08:11 - Taylor Green went through the turnstile",
  "Tue May 02 2017 00:35:51 - Hallie Muller went through the turnstile",
  "Fri Dec 28 2012 19:48:23 - Elyse Windler went through the turnstile",
  "Sat Feb 25 2012 09:25:32 - Mrs. Jammie Schroeder went through the turnstile",
  "Sun Jun 07 2015 01:59:17 - Akeem Renner went through the turnstile",
  "Wed May 02 2012 03:58:24 - Retha Senger went through the turnstile",
  "Fri Aug 04 2017 10:38:58 - Jessie Schultz went through the turnstile",
  "Sun Sep 16 2012 12:07:58 - Kamron Shanahan went through the turnstile",
  "Mon Aug 10 2009 12:29:17 - Bruce Rempel III went through the turnstile",
  "Sun May 04 2014 19:21:02 - Vilma Kunde went through the turnstile",
  "Sat Apr 10 2010 23:01:20 - Eric Lewis went through the turnstile",
  "Thu May 30 2013 22:13:48 - Delmer Cruickshank went through the turnstile",
  "Mon Oct 05 2015 00:09:52 - Dr. Diamond Casper went through the turnstile",
  "Tue Sep 20 2011 07:58:34 - Hailee Skiles went through the turnstile",
  "Mon Jan 30 2012 12:57:23 - Nyasia Brekke went through the turnstile",
  "Fri Apr 17 2009 05:17:16 - Leanne Kuhic IV went through the turnstile",
  "Tue Sep 24 2013 09:15:09 - Candido Leannon went through the turnstile",
  "Sat Jul 20 2013 02:32:00 - Ari Bergstrom went through the turnstile",
  "Thu May 26 2011 11:01:44 - Elva Murazik went through the turnstile",
  "Fri Apr 16 2010 04:56:34 - Erling Wolf went through the turnstile",
  "Thu Jan 19 2012 07:08:13 - Paula Fahey went through the turnstile",
  "Mon Jul 05 2010 19:06:21 - Marcellus Streich went through the turnstile",
  "Wed Dec 26 2012 16:12:28 - Marina Reilly went through the turnstile",
  "Tue Sep 14 2010 11:45:08 - Elisha Zulauf went through the turnstile",
  "Fri Jan 18 2013 05:00:36 - Myrtis Schiller MD went through the turnstile"
];

function getThursdayTurnstileLogs(logs) {
  let result = [];
  result.push(logs.filter(log => log.includes("Thu")));
  return result;
}

console.log(getThursdayTurnstileLogs(turnstileLogs));
