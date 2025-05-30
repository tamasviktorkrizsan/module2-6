Feature: Login


  @UC-1
  Scenario Outline: Test Login form with empty credentials
    Given the user enters email "<email>"
    And the user enters password "<password>"
    When the user clears the "<email>" field
    And the user clicks the Login button
    Then the error "<message>" should be displayed

    Examples:
      | email                 | password      | message           |
      | tamas@krizsanmunka.hu | Testing2025+  | Email is required |


#  @UC-2
#  Scenario Outline: Test Login form with credentials by passing Username
#    Given the user enters email "<email>"
#    And the user enters password "<password>"
#    When the user clears the "<password>" field
#    And the user clicks the Login button
#    Then the error "<message>" should be displayed
#
#    Examples:
#      | email           | password     | message                  |
#      | wrong_user@mail.com | Testing2025+ | Password is required |
#
#
#  @UC-3
#  Scenario Outline: Test Login form with credentials by passing invalid Username or Password
#    Given the user enters email "<email>"
#    And  the user enters password "<password>"
#    When the user clicks the Login button
#    Then the error "<message>" should be displayed
#
#    Examples:
#      | email                 | password     | message                   |
#      | tamas@krizsanmunka.hu | Testing2025+ | Invalid email or password |