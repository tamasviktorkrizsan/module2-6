Feature: index


@UC-1
  Scenario Outline: User changes language
    
    Given the user is on the index page
    When the user clicks on the language selector
    And the user clicks the language button DE
    Then the user redirected to the login page with text Sortieren

 

# @UC-2
#   Scenario Outline: User using search with results
    
#     Given the user is on the index page
#     When the user clicks on the search box
#     And the user types text Thor
#     And the user clicks the Search button
#     Then the product with the name Thor Hammer will be displayed
 