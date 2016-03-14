# Build an ActionCable Chat Service

1. New App

    ```bash
    rails _5.0.0.beta3_ new ac && cd ac && git init && git add . && git commit -am "initial commit"
    ```

2. Setup devise

    Add to the Gemfile:
    ```ruby
    gem 'devise', github: 'plataformatec/devise'
    ```
    
    Setup:
    ```bash
    bundle install && rails g devise:install && \
    rails g devise User && rails db:migrate
    ```

3. Generate the rooms controller and message model

    ```bash
    rails g controller rooms show && \
    rails g model message content:text user:references:index && \
    rails db:migrate
    ```

4. Update routes.rb and add before_action to controller:

    routes.rb:
    ```ruby
    root to: 'rooms#show'
    ```
    rooms_controller.rb:
    ```ruby
    before_action :authenticate_user!
    ```

