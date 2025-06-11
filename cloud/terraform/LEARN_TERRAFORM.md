# Learn terraform for Azure

## Installation on macOS

## Login

```bash
terraform version
az version
az login
```

### Terraform command

```bash
terraform fmt # format .tf file

terraform init # init the  the backend, init the provider, add .terraform folder and lock file .terraform.lock.hcl

terraform plan

terraform apply -auto-approve
```

## Exploring Terraform state

```bash
terraform state list

terraform apply -destroy
```

### References

- At min 39:19 [Learn Terraform with Azure by Building a Dev Environment – Full Course for Beginners](https://www.youtube.com/watch?v=V53AHWun17s&t=174s)
