# Build an ActionCable Chat Service

1. New App

    ```bash
    rails _5.0.0.beta3_ new ac && \
    cd ac && git init && git add . && \
    git commit -am "initial commit"
    ```

2. Set up devise

    Add to the Gemfile:
    ```ruby
    gem 'devise', github: 'plataformatec/devise'
    ```
    
    Install and Generate User Model
    ```bash
    bundle install && \
    rails g devise:install && \
    rails g devise User && \
    rails db:migrate && \
    git add . && \
    git commit -am "Devise and User Model"
    ```

3. Generate the Rooms Controller and Message Model

    ```bash
    rails g controller rooms show && \
    rails g model message content:text user:references:index && \
    rails db:migrate && \
    git add . && \
    git commit -am "Rooms Crontroller and Message Model"
    ```

4. Update routes.rb and add before_action to controller:

    routes.rb:
    ```ruby
    root to: 'rooms#show'
    ```
    rooms_controller.rb:
    ```ruby
    before_action :authenticate_user!
    def show
      @messages = Message.all
    end
    ```

5. Set up the controller and message partial views

    app/views/rooms/show.html.erb
    
    app/views/messages/_message.html.erb
    
    ```bash
    git add .
    git commit -am "Update routes and rooms controller"
    ```

6. Demo Rails App... 
    
    * Run Rails Server
    * Open App, Onboard User
    * Create Message Record:
    
        ```ruby
        Message.create content: 'hello world', user: User.first
        ```
    * Show App with record in browser


7. Generate our room channel with 'speak' action:
    ```bash
    rails g channel room speak
    ```

8. Uncomment App in cable.coffee, mount in routes.rb

9. Implement received and speak in room.coffee

10. Implement speak in room_channel.rb
    ```ruby
    def speak(data)
       ActionCable.server.broadcast 'room_channel', data['message']
     end
    ```
    ```bash
    git add .
    git commit -am "ActionCable Enabled"
    ```
11. Restart Rails Server and Demo via JS console

12. Add form field and required JavaScript to send messages..

13. Update channel 'speak' implementation to actually write to the db.

14. Explain current_user, warden config. Add warden hooks:

    Populate:
    config/initializers/warden_hooks.rb
    app/channels/application_cable/connection.rb:

15. Generate Job to handle Broadcasts

    ```ruby
    rails g job BroadcastMessage
    ```

16. Remove <p> from room.coffee received method

17. Add after_create_commit hook to send broadcast job.

    ```ruby
    after_create_commit { BroadcastMessageJob.perform_later self }
    ```
    
    ```bash
    git add .
    git commit -am "Fin"
    ```

18. STYLE