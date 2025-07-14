Feature: index


  @languageSelector
  Scenario: User changes language
    
    Given the user is on the index page
    When the user clicks on the language selector
    And the user clicks the language button DE
    Then the user redirected to the index page with text "<text>"

  Examples:
    | text      |
    | Sortieren |


  @searchBox
  Scenario Outline: User using search with results
    
    Given the user is on the index page
    When the user clicks on the search box
    And the user types text "<searchText>"
    And the user clicks the Search button
    Then the product with the name "<resultText>" will be displayed

  Examples:
    | searchText         | resultText         |
    | Combination Pliers | Combination Pliers |



  @searchBox
  Scenario Outline: User using search with no results
    
    Given the user is on the index page
    When the user clicks on the search box
    And the user types text "<searchText>"
    And the user clicks the Search button
    Then the text "<resultText>" will be displayed

  Examples:
    | searchText | resultText                  |
    | xyz        | There are no products found |      
 