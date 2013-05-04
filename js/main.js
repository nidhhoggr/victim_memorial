require([
    'jquery',
    'lodash',
    'backbone',
    'caroufredsel',
    'pretty_photo',
    'views/header',
    'views/start',
    'views/victim',
    'views/victim-memorial-details',
    'views/victim-memorial-list',
    'views/victim-picture-list',
    'views/victim-picture-slide',
    'utils/tpl',
    'models/victim-memorial-model',
    'models/victim-memorial-collection',
    'models/victim-picture-model',
    'models/victim-picture-collection'
],

function($, _, Backbone, caroufredsel, prettyPhoto, HeaderView, StartView, VictimView, VictimMemorialView, VictimMemorialListView, VictimPictureListView, VictimPictureSlideView, tpl, VicitmMemorial, VictimMemorialCollection, VictimPicture, VictimPictureCollection) {

    Backbone.View.prototype.close = function() {
        if (this.beforeClose) {
            this.beforeClose();
        }
        this.remove();
        this.unbind();
    };

    var AppRouter = Backbone.Router.extend({

        initialize: function() {
            $('#victim_header').html(new HeaderView().render());
        },

        routes: {
            "": "list",
            "start": "list",
            "victim_memorials/:id": "victimDetails"
        },

        list: function() {
            this.before(function() {
                this.loadMainDom();
                this.splitVictims();
                this.showView('#victim_slide', new VictimPictureSlideView({
                    collection: this.victimPictureList
                }),false);
                test = $('#foo').caroufredsel({items:3,next:'#next',prev:'#prev'});
                $("a[rel^='prettyPhoto']").prettyPhoto();
            });
        },

        loadMainDom: function() {
            this.showView('#content_wrapper', new StartView(), true);
        },
        loadVictimDom: function() {
            this.showView('#content_wrapper', new VictimView(), true);
        },
        victimDetails: function(id) {
           this.before(function() {
                this.loadVictimDom();
                var victim_memorial = this.victimMemorialList.get(id);
                var victim_info = new VictimMemorialView({model: victim_memorial});
                this.showView('#victim_info', victim_info, false);
                var victim_pictures = this.victimPictureList.where({victim_memorial_id: id});
                var picture_list_view = new VictimPictureListView({collection: victim_pictures});
                this.showView('#victim_pics',picture_list_view,false);
                $("a[rel^='prettyPhoto']").prettyPhoto();
            });
        },

        showView: function(selector, view, refresh) {
            
            if (this.lastView && refresh) this.lastView.close();

            $(selector).html(view.render());
            this.lastView = view;

            return view;
        },

        splitVictims: function() {

            collection = this.victimMemorialList;        

            var countPerDiv = Math.round(collection.length/3);

            var listClasses = new Array('one','two','three');
 
            var start=1;            
            
            for (i = 1; i<=3; i++) {
                 var divableCol = new Array();
                 var max = countPerDiv * i;
                 for(row = start; row <= max; row++) {
                     if(collection.get(row))
                         divableCol.push(collection.get(row));
                     else 
                         break;
                 }
                 var victim_memorial_list = new VictimMemorialListView({
                    model: divableCol,
                    className: listClasses[i - 1]
                 }).render();
                 $('#victim_nav').append(victim_memorial_list);
 
                 start = max+1;
            }
        },

        before: function(callback) {
            var self = this;

            if (this.victimMemorialList) {
                if (callback) callback.call(this);
            } 
            else {
  
               this.victimMemorialList = new VictimMemorialCollection();
               this.victimMemorialList.fetch({
                    success: function() {
                        if (callback) callback.call(self);
                    }
               });
            }

            if(this.victimPictureList) {
                if (callback) callback.call(this);
            } 
            else {
                this.victimPictureList  = new VictimPictureCollection();

                this.victimPictureList.fetch({
                    success: function() {
                        if (callback) callback.call(self);
                    }
                });
            }

        }

    });

    tpl.loadTemplates(['header', 'victim-memorial-details', 'victim-memorial-list-item', 'victim-picture-list-item','victim-picture-slide-item','start','victim'], function() {
        window.app = new AppRouter();
        Backbone.history.start();
    });

}); // End require
