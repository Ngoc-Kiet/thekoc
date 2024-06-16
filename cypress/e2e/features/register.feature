Feature: Register page

    Feature Register page will work depending on the user credentials.

    Background:
        Given A web browser is at the koc register page

    Scenario: Register Successfully
        # When I have a new user with the following details
        When I register
        When I click agree button
        When I click submit register button