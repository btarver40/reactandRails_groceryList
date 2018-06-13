class Api::GroceriesController < Api::ApiController
  before_action :set_grocery, only: [:update, :destroy]


  def index
    render json: Grocery.all
  end

  def create
    grocery = Grocery.new(grocery_params)
    if grocery.save
      render json: grocery
    else
      render_errors(grocery)
    end
  end

  def update
    @grocery.update(complete: !@grocery.complete)
    render json: @grocery
  end

  def destroy
    @grocery.destroy
  end

  private
  def grocery_params
    params.require(:grocery).permit(:name, :category, :complete)
  end

  def set_grocery
    @grocery = Grocery.find(params[:id])
  end


end
