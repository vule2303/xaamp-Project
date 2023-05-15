@echo off
rem START or STOP Services
rem ----------------------------------
rem Check if argument is STOP or START

if not ""%1"" == ""START"" goto stop

if exist D:\Vu\xampp\hypersonic\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\server\hsql-sample-database\scripts\ctl.bat START)
if exist D:\Vu\xampp\ingres\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\ingres\scripts\ctl.bat START)
if exist D:\Vu\xampp\mysql\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\mysql\scripts\ctl.bat START)
if exist D:\Vu\xampp\postgresql\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\postgresql\scripts\ctl.bat START)
if exist D:\Vu\xampp\apache\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\apache\scripts\ctl.bat START)
if exist D:\Vu\xampp\openoffice\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\openoffice\scripts\ctl.bat START)
if exist D:\Vu\xampp\apache-tomcat\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\apache-tomcat\scripts\ctl.bat START)
if exist D:\Vu\xampp\resin\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\resin\scripts\ctl.bat START)
if exist D:\Vu\xampp\jetty\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\jetty\scripts\ctl.bat START)
if exist D:\Vu\xampp\subversion\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\subversion\scripts\ctl.bat START)
rem RUBY_APPLICATION_START
if exist D:\Vu\xampp\lucene\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\lucene\scripts\ctl.bat START)
if exist D:\Vu\xampp\third_application\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\third_application\scripts\ctl.bat START)
goto end

:stop
echo "Stopping services ..."
if exist D:\Vu\xampp\third_application\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\third_application\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\lucene\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\lucene\scripts\ctl.bat STOP)
rem RUBY_APPLICATION_STOP
if exist D:\Vu\xampp\subversion\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\subversion\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\jetty\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\jetty\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\hypersonic\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\server\hsql-sample-database\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\resin\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\resin\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\apache-tomcat\scripts\ctl.bat (start /MIN /B /WAIT D:\Vu\xampp\apache-tomcat\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\openoffice\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\openoffice\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\apache\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\apache\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\ingres\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\ingres\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\mysql\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\mysql\scripts\ctl.bat STOP)
if exist D:\Vu\xampp\postgresql\scripts\ctl.bat (start /MIN /B D:\Vu\xampp\postgresql\scripts\ctl.bat STOP)

:end

