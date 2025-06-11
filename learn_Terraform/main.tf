terraform {
  required_providers {
    azurerm = {
      source  = "hashicorp/azurerm"
      version = "=2.91.0"
    }
  }
}

provider "azurerm" {
  features {}
}

resource "azurerm_resource_group" "tuto-rg" {
  name     = "tuto-resources"
  location = "Canada East"
  tags = {
    environment = "dev"
    source      = "terraform"
    owner       = "seb"
  }
}

resource "azurerm_virtual_network" "tuto-vn" {
  name                = "tuto-network"
  resource_group_name = azurerm_resource_group.tuto-rg.name
  location            = azurerm_resource_group.tuto-rg.location
  address_space       = ["10.123.0.0/16"]

  tags = {
    environment = "dev"
    source      = "terraform"
    owner       = "seb"
  }
}

# resource "azurerm_subnet" "tuto-subnet" {
#   name                 = "tuto-subnet"
#   resource_group_name  = azurerm_resource_group.tuto-rg.name
#   virtual_network_name = azurerm_virtual_network.tuto-vn.name
#   address_prefixes     = ["10.123.0.0/24"]
# }

resource "azurerm_network_security_group" "tuto-sg" {
  name                = "tuto-sg"
  resource_group_name = azurerm_resource_group.tuto-rg.name
  location            = azurerm_resource_group.tuto-rg.location

  tags = {
    environment = "dev"
    source      = "terraform"
    owner       = "seb"
  }
}
