@ECHO OFF
:: @sportilla
TITLE WIREMOCK - DIANA MOCKS
ECHO WIREMOCK - DIANA MOCKS
java -Dfile.encoding=UTF-8 -jar wiremock-jre8-standalone-2.32.0.jar --enable-stub-cors -verbose -port 9090
pause
