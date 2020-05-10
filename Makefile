run:
	@echo "#######################"
	@echo "# Running application #"
	@echo "#######################"
	docker-compose up --remove-orphans

run_build:
	@echo "#######################"
	@echo "# Rebuilding application #"
	@echo "#######################"
	docker-compose up --b

connect:
	@echo "################################"
	@echo "# Connecting to application db #"
	@echo "################################"
	docker-compose exec postgres psql -U postgres db

build:
	@echo "########################"
	@echo "# Building application #"
	@echo "########################"
	docker build -t my-wallet-backend:latest .


