Feature: Login page

    Feature Login page will work depending on the user credentials.

    Background:
        Given A web browser is at the koc login page
    # Scenario: Success Login
    #     When A user enters the id "salescorevn", the password "Sale2023", and clicks on the login button
    #     Then the url will contains the inventory subdirectory
    # Scenario:  Login with Google Login
    #     When A user enters the username "salescorevn@gmail.com", the password "Test2023", and clicks on the login button
    #     Then the url will contains the inventory subdirectory

    # Scenario:  Login with Naver
    #     When A user enters the username Naver "wadint01", the password Naver "wad2023!!", and clicks on the login button
    #     Then the url will contains the inventory subdirectory

    # Scenario:  Login with Kakao
    #     When A user enters the username Kakao "wadintlko@gmail.com", the password Kakao "kasaco23!*!*", and clicks on the login button
    #     Then the url will contains the inventory subdirectory
    Scenario: Incorrect Username Login
        When A user enters the id "salescorevn1", the password "Sale2023", and clicks on the login button unsuccessful
        Then The error message "로그인 실패 하였습니다." is displayed

    Scenario: Incorrect Password Login
        When A user enters the id "salescorevn", the password "Sale2023%%", and clicks on the login button unsuccessful
        Then The error message "로그인 실패 하였습니다." is displayed

    Scenario: Incorrect Password And UserName Login
        When A user enters the id "salescorevn1", the password "Sale2023%%", and clicks on the login button unsuccessful
        Then The error message "로그인 실패 하였습니다." is displayed

    Scenario: Empty Password And UserName Login
        When User click button login
        Then The error message "로그인 실패 하였습니다." is displayed

#     Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed
# Scenario: Incorrect Password Login
#     When A user provides incorrect credentials, and clicks on the login button
#         | username      | password     |
#         | standard_user | testPassword |
#     Then The error message "Epic sadface: Username and password do not match any user in this service" is displayed