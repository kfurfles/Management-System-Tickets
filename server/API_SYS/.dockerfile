FROM microsoft/dotnet:2.0.0-preview1-runtime
RUN apt-get update \
    && add-apt-repository universe && apt-get install apt-transport-https \
    && apt-get update \
    && apt-get install dotnet-sdk-2.0
WORKDIR /app
COPY . .
CMD ASPNETCORE_URLS=http://*:$PORT dotnet API_SYS.dll