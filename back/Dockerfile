FROM mhart/alpine-node:8 as nodeDeps
RUN mkdir /work
COPY ./api/ /work/
RUN ls /work/
WORKDIR /work/api
RUN npm i
RUN npm build 



FROM nodeDeps as build
RUN mkdir -p /work/
COPY --from=nodeDeps /work/api /work/
WORKDIR /work
RUN ls 
RUN npm run build



FROM build as Runner
RUN mkdir /runner
COPY --from=build /work/build/src/ /runnner/
WORKDIR /runner/
RUN ls /work/
RUN ls /work/build
RUN ls
RUN node --version
CMD ["node", "main.js"]

