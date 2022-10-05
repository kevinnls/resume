dev:
	podman run $(PODMAN_ARGS) $(IMAGE) $(CONATINER_ARGS)

PORT ?= 4000
IMAGE = ghcr.io/kevinnls/pages-gem:latest-alpine
PODMAN_ARGS = --rm --publish $(PORT):4000 --publish 35942:35942 \
	--detach \
	--name resume \
	--volume ./:/src/site:Z,U
CONTAINER_ARGS = jekyll serve \
			--host 0.0.0.0 \
			--port 4000 \
			--livereload \
			--livereload-port 35942 \
			--baseurl '/' \
			--unpublished
