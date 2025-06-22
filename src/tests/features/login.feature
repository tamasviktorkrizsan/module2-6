Feature: Login


  @UC-1
  Scenario Outline: Test Login form with empty email
    Given the user is on the login page 
    And the user enters password "<password>"
    When the user clicks the Login button
    Then the error "Email is required" should be displayed

    Examples:
      | password      |
      | Testing2025+  |


 @UC-2
 Scenario Outline: Test Login form with empty password
   Given the user is on the login page
   And the user enters email "<email>"
   When the user clicks the Login button
   Then the error "Password is required" should be displayed

   Examples:
     | email               |
     | wrong_user@mail.com |


 @UC-3
 Scenario Outline: Test Login form with invalid Username and Password
   
   Given the user is on the login page
   And the user enters email "<email>"
   And the user enters password "<password>"
   When the user clicks the Login button
   Then the error "Invalid email or password" should be displayed

   Examples:
     | email                 | password     |
     | tamas@krizsanmunka.hu | Testing2025+ |


 @UC-4
  Scenario Outline: Test Login form with credentials by passing Username & Password
    Given the user is on the login page
    And the user enters email "<email>" 
    And the user enters password "<password>"
    When the user clicks the Login button
    Then the user redirected to the my account page

    Examples:
      | email                                  | password  |
      | customer2@practicesoftwaretesting.com  | welcome01 |    


@UC-5
  Scenario: User logs out successfully
    Given the user is logged in
    When the user clicks the user menu
    And the user clicks the logout button
    Then the user redirected to the login page
    



