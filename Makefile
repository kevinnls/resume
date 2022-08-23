.PHONY: init install npm sh serve

PORT ?= 8080
container_cmd = docker compose run -it --rm -p${PORT}:8080 dev

serve:
	docker compose up -d
	docker compose logs -f

init:
	${container_cmd} npm init $(ARGS)
install:
	${container_cmd} npm install $(ARGS)
npm:
	${container_cmd} npm $(ARGS)
sh:
	${container_cmd} sh $(ARGS)
