Feature: index


@UC-1
  Scenario Outline: User changes language
    
    Given the user is on the index page
    When the user clicks on the language selector
    And the user clicks the language button DE
    Then the user redirected to the login page with text Sortieren

 

@UC-2
  Scenario Outline: User using search with results
    
    Given the user is on the index page
    When the user clicks on the search box
    And the user types text Wood Saw
    And the user clicks the Search button
    Then the product with the name Wood Saw will be displayed



@UC-2
  Scenario Outline: User using search with no results
    
    Given the user is on the index page
    When the user clicks on the search box
    And the user types text xyz
    And the user clicks the Search button
    Then the text There are no products found will be displayed    
 