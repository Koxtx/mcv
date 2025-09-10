app.structure = {
	enum: {
		pageSlug: {
			HOME: `home`,
			NEWS_LIST: `news_list`,
			NEWS_DETAIL: `news_detail`,
			DIARY_LIST: `diary_list`,
			DIARY_DETAIL: `diary_detail`,
			MY_CITY_LIST: `my_city_list`,
			ADMINISTRATIVE_PROCEDURES_LIST: `administrative_procedures_list`,
			MUNICIPAL_SERVICES_LIST: `municipal_services_list`,
			MUNICIPAL_SERVICES_DETAIL: `municipal_services_detail`,
			DIRECTORY_LIST: `directory_list`,
			PRACTICAL_INFORMATIONS_LIST: `practical_informations_list`,
			PRACTICAL_ARTICLES_LIST: `practical_articles_list`,
			PRACTICAL_ARTICLES_DETAIL: `practical_articles_detail`,
			WALK_AROUND_LIST: `walk_around_list`,
			WALK_AROUND_DETAIL: `walk_around_detail`,
			USE_STAMINA_LIST: `use_stamina_list`,
			USE_STAMINA_DETAIL: `use_stamina_detail`,
			DISCOVER_LIST: `discover_list`,
			DISCOVER_DETAIL: `discover_detail`,
			FEAST_LIST: `feast_list`,
			FEAST_DETAIL: `feast_detail`,
			SCHOOLS_LIST: `schools_list`,
			SCHOOL_DETAIL: `school_detail`,
			ASSOCIATIONS_LIST: `associations_list`,
			ASSOCIATIONS_DETAIL: `associations_detail`,
			USEFUL_NUMBERS_LIST: `useful_numbers_list`,
			ELECTED_LIST: `elected_list`,
			ELECTED_DETAIL: `elected_detail`,
			HALL_RENTAL_LIST: `hall_rental_list`,
			HALL_RENTAL_DETAIL: `hall_rental_detail`,
			SHOPS_LIST: `shops_list`,
			SHOPS_DETAIL: `shops_detail`,
			HEALTH_LIST: `health_list`,
			HEALTH_DETAIL: `health_detail`,
			MUNICIPAL_COUNCILS_LIST: `municipal_councils_list`,
			ESERVICES_LIST: `eservices_list`,
			PROFILE_LOG_IN: `profile_log_in`,
			PROFILE_ACCOUNT: `profile_account`,
			NOTIFICATION_LIST: `notification_list`,
			APPLICATION: `application`,
			WEATHER_LIST: `weather_list`,
			MAP: `map`,
			MAP_POINT_DETAIL: `map_point_detail`,
			CONTACT: `contact`,
			CITIZENSHIP_CHOICE: `citizenship_choice`,
			CITIZENSHIP_CONGRAT_LIST: `citizenship_congrat_list`,
			CITIZENSHIP_REPORT_LIST: `citizenship_report_list`,
			CITIZENSHIP_CONGRAT_NEW: `citizenship_congrat_new`,
			CITIZENSHIP_REPORT_NEW: `citizenship_report_new`,
			CITIZENSHIP_CONGRAT_DETAIL: `citizenship_congrat_detail`,
			CITIZENSHIP_REPORT_DETAIL: `citizenship_report_detail`,
			TICKETING_LIST: `ticketing_list`,
			TICKETING_DETAIL: `ticketing_detail`,
			TICKETING_SELECT: `ticketing_select`,
			SURVEY_LIST: `survey_list`,
			SURVEY_NEW: `survey_new`,
			SURVEY_DETAIL: `survey_detail`,
			SOCIAL_NETWORK_LIST: `social_network_list`,
			EBOOKING_LIST: `ebooking_list`,
			EBOOKING_NEW: `ebooking_new`,
			EBOOKING_DETAIL: `ebooking_detail`,
			EBOOKING_TIMELINE: `ebooking_timeline`,
			MYPERISCHOOL: `myperischool`,
		}
	}
};

app.structure.modules = {
		HOME: app.structure.enum.pageSlug.HOME,
		PROFILE_LOG_IN: app.structure.enum.pageSlug.PROFILE_LOG_IN,
		PROFILE_ACCOUNT: app.structure.enum.pageSlug.PROFILE_ACCOUNT,
		NOTIFICATION_LIST: app.structure.enum.pageSlug.NOTIFICATION_LIST,
		APPLICATION: app.structure.enum.pageSlug.APPLICATION,
		WEATHER_LIST: app.structure.enum.pageSlug.WEATHER_LIST,
		MAP: app.structure.enum.pageSlug.MAP,
		CONTACT: app.structure.enum.pageSlug.CONTACT,
		CITIZENSHIP_CONGRAT_LIST: app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_LIST,
		CITIZENSHIP_REPORT_LIST: app.structure.enum.pageSlug.CITIZENSHIP_REPORT_LIST,
		CITIZENSHIP_CONGRAT_NEW: app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_NEW,
		CITIZENSHIP_REPORT_NEW: app.structure.enum.pageSlug.CITIZENSHIP_REPORT_NEW,
		CITIZENSHIP_CONGRAT_DETAIL: app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_DETAIL,
		CITIZENSHIP_REPORT_DETAIL: app.structure.enum.pageSlug.CITIZENSHIP_REPORT_DETAIL,
		TICKETING_LIST: app.structure.enum.pageSlug.TICKETING_LIST,
		TICKETING_DETAIL: app.structure.enum.pageSlug.TICKETING_DETAIL,
		TICKETING_SELECT: app.structure.enum.pageSlug.TICKETING_SELECT,
		SURVEY_LIST: app.structure.enum.pageSlug.SURVEY_LIST,
		SURVEY_NEW: app.structure.enum.pageSlug.SURVEY_NEW,
		SURVEY_DETAIL: app.structure.enum.pageSlug.SURVEY_DETAIL,
		EBOOKING_LIST: app.structure.enum.pageSlug.EBOOKING_LIST,
		EBOOKING_NEW: app.structure.enum.pageSlug.EBOOKING_NEW,
		EBOOKING_DETAIL: app.structure.enum.pageSlug.EBOOKING_DETAIL,
		EBOOKING_TIMELINE: app.structure.enum.pageSlug.EBOOKING_TIMELINE,
	};

app.structure.navigations = {
	my_city_list: {
		name: `Ma ville`,
		iconCls: `fal fa-city`,
		linkSlug: app.structure.enum.pageSlug.MY_CITY_LIST,
	},
	elected_list: {
		name: `Les élus`,
		iconCls: `fas fa-users`,
		linkSlug: app.structure.enum.pageSlug.ELECTED_LIST,
		summary: `L'ensemble des élus de votre ville`,
	},
	contact: {
		name: `Contact`,
		iconCls: `fas fa-comment-alt-lines`,
		linkSlug: app.structure.enum.pageSlug.CONTACT,
		summary: `Formulaire de contact`,
	},
	shops_list: {
		name: `Les commerces`,
		iconCls: `fas fa-shopping-cart`,
		linkSlug: app.structure.enum.pageSlug.SHOPS_LIST,
		summary: `Tous les commerces de votre ville`,
	},
	health_list: {
		name: `Santé`,
		iconCls: `fas fa-briefcase-medical`,
		linkSlug: app.structure.enum.pageSlug.HEALTH_LIST,
		summary: `Tous les professionnels de santé`,
	},
	discover_list: {
		name: `Découvrir`,
		iconCls: `fas fa-map-signs`,
		linkSlug: app.structure.enum.pageSlug.DISCOVER_LIST,
		summary: `Découvrir votre ville`,
	},
	feast_list: {
		name: `Se régaler`,
		iconCls: `fas fa-utensils`,
		linkSlug: app.structure.enum.pageSlug.FEAST_LIST,
		summary: `Se restaurer dans Beuvry`,
	},
	citizenship_report_list: {
		name: `Je signale`,
		iconCls: ``,
		linkSlug: app.structure.enum.pageSlug.CITIZENSHIP_REPORT_LIST,
		summary: `Un problème de voirie, une panne, un dysfonctionnement, ...`,
		imagePath: `custom/img/mobile/citizenship/report.jpg`,
	},
	ebooking_list: {
		name: `Réservation`,
		iconCls: `fas fa-calendar-check`,
		linkSlug: app.structure.enum.pageSlug.EBOOKING_LIST,
		summary: `Effectuez une réservation en un clic`,
		backgroundColorClass: `theme-mvc-mobile-background-color-light-blue`,
	},
	eservices_list: {
		name: `Contact`,
		iconCls: `fal fa-mobile-alt`,
		linkSlug: app.structure.enum.pageSlug.ESERVICES_LIST,
	},
	weather_list: {
		name: `Météo`,
		iconCls: `fas fa-cloud-sun`,
		linkSlug: app.structure.enum.pageSlug.WEATHER_LIST,
		summary: `La météo de votre ville`,
	},
	administrative_procedures_list: {
		name: `Démarches administratives`,
		iconCls: `fas fa-pen`,
		linkSlug: app.structure.enum.pageSlug.ADMINISTRATIVE_PROCEDURES_LIST,
		summary: `Toutes les démarches administratives`,
	},
	municipal_councils_list: {
		name: `Conseils municipaux`,
		iconCls: `fas fa-books`,
		linkSlug: app.structure.enum.pageSlug.MUNICIPAL_COUNCILS_LIST,
		summary: `Les comptes-rendus des conseils municipaux`,
	},
	practical_articles_list: {
		name: `Article de vie pratique`,
		iconCls: `fas fa-newspaper`,
		linkSlug: app.structure.enum.pageSlug.PRACTICAL_ARTICLES_LIST,
		summary: `Articles de la vie quotidienne`,
	},
	citizenship_choice: {
		name: `Citoyenneté`,
		iconCls: `fas fa-users`,
		linkSlug: app.structure.enum.pageSlug.CITIZENSHIP_CHOICE,
		summary: `Je participe à la vie de ma commune`,
	},
	citizenship_congrat_list: {
		name: `Je félicite`,
		iconCls: ``,
		linkSlug: app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_LIST,
		summary: `Un élu, une association, une initiative, un comportement, ...`,
		imagePath: `custom/img/mobile/citizenship/congrat.jpg`,
	},
	survey_list: {
		name: `Sondage`,
		iconCls: `fas fa-poll-h`,
		linkSlug: app.structure.enum.pageSlug.SURVEY_LIST,
		summary: `Donnez-nous votre avis`,
	},
	practical_informations_list: {
		name: `Vie pratique`,
		iconCls: `fal fa-lightbulb-exclamation`,
		linkSlug: app.structure.enum.pageSlug.PRACTICAL_INFORMATIONS_LIST,
	},
	map: {
		name: `Plan`,
		iconCls: `fal fa-map-marked-alt`,
		linkSlug: app.structure.enum.pageSlug.MAP,
	},
	associations_list: {
		name: `Les associations`,
		iconCls: `fas fa-project-diagram`,
		linkSlug: app.structure.enum.pageSlug.ASSOCIATIONS_LIST,
		summary: `Toutes les associations de votre ville`,
	},
	use_stamina_list: {
		name: `Se dépenser`,
		iconCls: `fas fa-running`,
		linkSlug: app.structure.enum.pageSlug.USE_STAMINA_LIST,
		summary: `Se dépenser dans Beuvry`,
	},
	hall_rental_list: {
		name: `Location de salles`,
		iconCls: `fas fa-key-skeleton`,
		linkSlug: app.structure.enum.pageSlug.HALL_RENTAL_LIST,
		summary: `Les salles municipales disponibles`,
	},
	ticketing_list: {
		name: `Billetterie`,
		iconCls: `fas fa-ticket-alt`,
		linkSlug: app.structure.enum.pageSlug.TICKETING_LIST,
		summary: `Réservation de billets`,
	},
	social_network_list: {
		name: `Réseaux sociaux`,
		iconCls: `fas fa-users`,
		linkSlug: app.structure.enum.pageSlug.SOCIAL_NETWORK_LIST,
		summary: `Retrouvez-nous sur les réseaux sociaux`,
	},
	social_network_facebook: {
		name: `Facebook`,
		iconCls: `fab fa-facebook-square`,
		summary: `Retrouvez-nous sur Facebook`,
		externalLink: `https://www.facebook.com/mairie.beuvry/`,
	},
	social_network_instagram: {
		name: `Instagram`,
		iconCls: `fab fa-instagram`,
		summary: `Retrouvez-nous sur Instagram`,
		externalLink: `https://www.instagram.com/villedebeuvry/`,
	},
	social_network_youtube: {
		name: `Youtube`,
		iconCls: `fab fa-youtube`,
		summary: `Retrouvez-nous sur Youtube`,
		externalLink: `https://www.youtube.com/channel/UCsHMbDJUMgJrf9ANwFCeXxw`,
	},
	news_list: {
		name: `Actualités`,
		iconCls: `fal fa-newspaper`,
		linkSlug: app.structure.enum.pageSlug.NEWS_LIST,
		badge: `standardNews`,
	},
	diary_list: {
		name: `Agenda`,
		iconCls: `fal fa-calendar-day`,
		linkSlug: app.structure.enum.pageSlug.DIARY_LIST,
		badge: `standardEvent`,
	},
	directory_list: {
		name: `Annuaire`,
		iconCls: `fal fa-book`,
		linkSlug: app.structure.enum.pageSlug.DIRECTORY_LIST,
		summary: `Retrouvez vos commerces, associations, ...`,
	},
	profile: {
		name: `Mon profil`,
		iconCls: `fal fa-user-edit`,
		linkSlug: app.structure.enum.pageSlug.PROFILE_ACCOUNT,
	},
	municipal_services_list: {
		name: `Services Municipaux`,
		iconCls: `fas fa-book-open`,
		linkSlug: app.structure.enum.pageSlug.MUNICIPAL_SERVICES_LIST,
		summary: `L'ensemble des services municipaux`,
	},
	schools_list: {
		name: `Les écoles`,
		iconCls: `fas fa-school`,
		linkSlug: app.structure.enum.pageSlug.SCHOOLS_LIST,
		summary: `L'ensemble des écoles`,
	},
	useful_numbers_list: {
		name: `Numéros utiles`,
		iconCls: `fas fa-phone flip`,
		linkSlug: app.structure.enum.pageSlug.USEFUL_NUMBERS_LIST,
		summary: `Tous vos numéros au même endroit`,
	},
	walk_around_list: {
		name: `Se balader`,
		iconCls: `fas fa-walking`,
		linkSlug: app.structure.enum.pageSlug.WALK_AROUND_LIST,
		summary: `Se balader dans Beuvry`,
	},
	myperischool: {
		name: `MyPérischool`,
		iconCls: `fal fa-school`,
		linkSlug: app.structure.enum.pageSlug.MYPERISCHOOL,
	},
};

app.structure.mobilePages = {
		[app.structure.enum.pageSlug.HOME]: {
			theme: `app`,
			datasets: {
			slider: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardNews',
			        linkSlug: app.structure.enum.pageSlug.NEWS_DETAIL,
			        maxData: 4
			    },
			tiles: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.my_city_list,
			            app.structure.navigations.eservices_list,
			            app.structure.navigations.myperischool,
			            app.structure.navigations.news_list,
			            app.structure.navigations.diary_list,
			            app.structure.navigations.directory_list,
			            app.structure.navigations.practical_informations_list,
			            app.structure.navigations.map
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.NEWS_LIST]: {
			title: `Actualités`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardNews',
			        linkSlug: app.structure.enum.pageSlug.NEWS_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.NEWS_DETAIL]: {
			title: `Actualités`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.DIARY_LIST]: {
			title: `Agenda`,
			pullToRefresh: true,
			datasets: {
			tabs_list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardEvent',
			        linkSlug: app.structure.enum.pageSlug.DIARY_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.DIARY_DETAIL]: {
			title: `Agenda`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.MY_CITY_LIST]: {
			title: `Ma ville`,
			pullToRefresh: true,
			useDefaultNavigationList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.municipal_services_list,
			            app.structure.navigations.elected_list,
			            app.structure.navigations.ebooking_list,
			            app.structure.navigations.hall_rental_list,
			            app.structure.navigations.administrative_procedures_list,
			            app.structure.navigations.weather_list
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.ADMINISTRATIVE_PROCEDURES_LIST]: {
			title: `Démarches administratives`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardAdministrativeProcedure'
			    }
			}
		},
		[app.structure.enum.pageSlug.MUNICIPAL_SERVICES_LIST]: {
			title: `Services municipaux`,
			pullToRefresh: true,
			useDefaultList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardMunicipalService',
			        linkSlug: app.structure.enum.pageSlug.MUNICIPAL_SERVICES_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.MUNICIPAL_SERVICES_DETAIL]: {
			title: `Services municipaux`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.DIRECTORY_LIST]: {
			title: `Annuaire`,
			pullToRefresh: true,
			useDefaultNavigationList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.schools_list,
			            app.structure.navigations.shops_list,
			            app.structure.navigations.associations_list,
			            app.structure.navigations.health_list,
			            app.structure.navigations.useful_numbers_list
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.PRACTICAL_INFORMATIONS_LIST]: {
			title: `Vie pratique`,
			pullToRefresh: true,
			useDefaultNavigationList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.practical_articles_list,
			            app.structure.navigations.walk_around_list,
			            app.structure.navigations.use_stamina_list,
			            app.structure.navigations.discover_list,
			            app.structure.navigations.feast_list
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.PRACTICAL_ARTICLES_LIST]: {
			title: `Vie pratique`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'praticalLifePost',
			        linkSlug: app.structure.enum.pageSlug.PRACTICAL_ARTICLES_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.PRACTICAL_ARTICLES_DETAIL]: {
			title: `Vie pratique`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.WALK_AROUND_LIST]: {
			title: `Se balader`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'balade',
			        linkSlug: app.structure.enum.pageSlug.WALK_AROUND_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.WALK_AROUND_DETAIL]: {
			title: `Se balader`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.USE_STAMINA_LIST]: {
			title: `Se dépenser`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'sedepenser',
			        linkSlug: app.structure.enum.pageSlug.USE_STAMINA_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.USE_STAMINA_DETAIL]: {
			title: `Se dépenser`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.DISCOVER_LIST]: {
			title: `Découvrir`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'decouvrir',
			        linkSlug: app.structure.enum.pageSlug.DISCOVER_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.DISCOVER_DETAIL]: {
			title: `Découvrir`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.FEAST_LIST]: {
			title: `Se régaler`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'seregaler',
			        linkSlug: app.structure.enum.pageSlug.FEAST_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.FEAST_DETAIL]: {
			title: `Se régaler`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.SCHOOLS_LIST]: {
			title: `Les écoles`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'school',
			        linkSlug: app.structure.enum.pageSlug.SCHOOL_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.SCHOOL_DETAIL]: {
			title: `Les écoles`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.ASSOCIATIONS_LIST]: {
			title: `Les associations`,
			pullToRefresh: true,
			useDefaultList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardAssociation',
			        linkSlug: app.structure.enum.pageSlug.ASSOCIATIONS_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.ASSOCIATIONS_DETAIL]: {
			title: `Les associations`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.USEFUL_NUMBERS_LIST]: {
			title: `Numéros utiles`,
			pullToRefresh: true,
			useDefaultContactList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'usefulNumber'
			    }
			}
		},
		[app.structure.enum.pageSlug.ELECTED_LIST]: {
			title: `Les élus`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardElectedMember',
			        linkSlug: app.structure.enum.pageSlug.ELECTED_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.ELECTED_DETAIL]: {
			title: `Élu`,
			pullToRefresh: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.HALL_RENTAL_LIST]: {
			title: `Location de salles`,
			pullToRefresh: true,
			useDefaultImageList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'hallRental',
			        linkSlug: app.structure.enum.pageSlug.HALL_RENTAL_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.HALL_RENTAL_DETAIL]: {
			title: `Les salles`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.SHOPS_LIST]: {
			title: `Les commerces`,
			pullToRefresh: true,
			useDefaultList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardShop',
			        linkSlug: app.structure.enum.pageSlug.SHOPS_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.SHOPS_DETAIL]: {
			title: `Les commerces`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.HEALTH_LIST]: {
			title: `Santé`,
			pullToRefresh: true,
			useDefaultList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'health',
			        linkSlug: app.structure.enum.pageSlug.HEALTH_DETAIL
			    }
			}
		},
		[app.structure.enum.pageSlug.HEALTH_DETAIL]: {
			title: `Santé`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.MUNICIPAL_COUNCILS_LIST]: {
			title: `Conseils municipaux`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardMunicipalCouncil'
			    }
			}
		},
		[app.structure.enum.pageSlug.ESERVICES_LIST]: {
			title: `Contact`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.citizenship_choice,
			            app.structure.navigations.ticketing_list,
			            app.structure.navigations.survey_list,
			            app.structure.navigations.social_network_list,
			            app.structure.navigations.contact
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.PROFILE_LOG_IN]: {
			title: `S'identifier`,
			datasets: {
			profile: {
			        type: app.enum.datasetType.MODULE_PROFILE,
			        moduleOptions: {
			            step: app.enum.module.profile.step.LOG_IN
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.PROFILE_ACCOUNT]: {
			title: `Mon profil`,
			datasets: {
			profile: {
			        type: app.enum.datasetType.MODULE_PROFILE,
			        moduleOptions: {
			            step: app.enum.module.profile.step.ACCOUNT
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.NOTIFICATION_LIST]: {
			title: `Notifications`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_NOTIFICATION
			    }
			}
		},
		[app.structure.enum.pageSlug.APPLICATION]: {
			title: `Application`,
			datasets: {
			details: {
			        type: app.enum.datasetType.MODULE_APPLICATION
			    },
			datas: {
			        type: app.enum.datasetType.ENTITY,
			        datas: 'standardMyTownHall'
			    }
			}
		},
		[app.structure.enum.pageSlug.WEATHER_LIST]: {
			title: `Météo`,
			pullToRefresh: true,
			datasets: {
			tabs_list: {
			        type: app.enum.datasetType.MODULE_WEATHER
			    }
			}
		},
		[app.structure.enum.pageSlug.MAP]: {
			title: `Plan`,
			useDefaultMap: true,
			datasets: {
			map: {
			        type: app.enum.datasetType.MODULE_MAP,
			        mapSlug: '_1',
			        layers: [
			            {
			                id: '_2',
			                name: 'Services municipaux'
			            },
			            {
			                id: '_3',
			                name: 'Monuments historiques'
			            },
			            {
			                id: '_4',
			                name: 'Vente directe à la ferme'
			            },
			            {
			                id: '_6',
			                name: 'Espaces naturels'
			            },
			            {
			                id: '_7',
			                name: 'Équipements sportifs'
			            },
			            {
			                id: '_8',
			                name: 'Salles municipales'
			            },
			            {
			                id: '_12',
			                name: 'Chemins de randonnées'
			            },
			            {
			                id: '_13',
			                name: 'Équipements culturels'
			            },
			            {
			                id: '_14',
			                name: 'Lieux de restauration'
			            },
			            {
			                id: '_15',
			                name: 'Parcs et aires de jeux'
			            }
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.MAP_POINT_DETAIL]: {
			title: `Détail`,
			pullToRefresh: true,
			useDefaultDetail: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.ENTITY
			    }
			}
		},
		[app.structure.enum.pageSlug.CONTACT]: {
			title: `Contact`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			form: {
			        type: app.enum.datasetType.MODULE_CONTACT
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_CHOICE]: {
			title: `Citoyenneté`,
			datasets: {
			buttons: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.citizenship_congrat_list,
			            app.structure.navigations.citizenship_report_list
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_LIST]: {
			title: `Je félicite`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_CITIZENSHIP,
			        linkSlug: app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_DETAIL,
			        moduleOptions: {
			            type: app.enum.module.citizenship.type.CONGRAT,
			            step: app.enum.module.citizenship.step.LIST
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_REPORT_LIST]: {
			title: `Je signale`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_CITIZENSHIP,
			        linkSlug: app.structure.enum.pageSlug.CITIZENSHIP_REPORT_DETAIL,
			        moduleOptions: {
			            type: app.enum.module.citizenship.type.REPORT,
			            step: app.enum.module.citizenship.step.LIST
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_NEW]: {
			title: `Nouveau`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			form: {
			        type: app.enum.datasetType.MODULE_CITIZENSHIP,
			        moduleOptions: {
			            type: app.enum.module.citizenship.type.CONGRAT,
			            step: app.enum.module.citizenship.step.NEW
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_REPORT_NEW]: {
			title: `Nouveau`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			form: {
			        type: app.enum.datasetType.MODULE_CITIZENSHIP,
			        moduleOptions: {
			            type: app.enum.module.citizenship.type.REPORT,
			            step: app.enum.module.citizenship.step.NEW
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_CONGRAT_DETAIL]: {
			title: `Détail`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			message: {
			        type: app.enum.datasetType.MODULE_CITIZENSHIP,
			        moduleOptions: {
			            type: app.enum.module.citizenship.type.CONGRAT,
			            step: app.enum.module.citizenship.step.DETAIL
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.CITIZENSHIP_REPORT_DETAIL]: {
			title: `Détail`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			message: {
			        type: app.enum.datasetType.MODULE_CITIZENSHIP,
			        moduleOptions: {
			            type: app.enum.module.citizenship.type.REPORT,
			            step: app.enum.module.citizenship.step.DETAIL
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.TICKETING_LIST]: {
			title: `Billetterie`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_TICKETING,
			        moduleOptions: {
			            step: app.enum.module.ticketing.step.LIST
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.TICKETING_DETAIL]: {
			title: `Événement`,
			pullToRefresh: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.MODULE_TICKETING,
			        moduleOptions: {
			            step: app.enum.module.ticketing.step.DETAIL
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.TICKETING_SELECT]: {
			title: `Réservation`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			select: {
			        type: app.enum.datasetType.MODULE_TICKETING,
			        moduleOptions: {
			            step: app.enum.module.ticketing.step.SELECT
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.SURVEY_LIST]: {
			title: `Sondages`,
			headBlock: `Tous les sondages et leurs réponses associées sont anonymes.`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_SURVEY,
			        moduleOptions: {
			            step: app.enum.module.survey.step.LIST
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.SURVEY_NEW]: {
			title: `Nouveau`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			form: {
			        type: app.enum.datasetType.MODULE_SURVEY,
			        moduleOptions: {
			            step: app.enum.module.survey.step.NEW
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.SURVEY_DETAIL]: {
			title: `Résultats`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.MODULE_SURVEY,
			        moduleOptions: {
			            step: app.enum.module.survey.step.DETAIL
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.SOCIAL_NETWORK_LIST]: {
			title: `Réseaux sociaux`,
			headBlock: `Suivez toute l'actualité de votre ville sur nos différents réseaux sociaux.`,
			useDefaultNavigationList: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.NAVIGATION,
			        datas: [
			            app.structure.navigations.social_network_facebook,
			            app.structure.navigations.social_network_instagram,
			            app.structure.navigations.social_network_youtube
			        ]
			    }
			}
		},
		[app.structure.enum.pageSlug.EBOOKING_LIST]: {
			title: `e-Réservation`,
			contextColor: `theme-mvc-mobile-background-color-light-blue`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_EBOOKING,
			        linkSlug: app.structure.enum.pageSlug.EBOOKING_DETAIL,
			        moduleOptions: {
			            step: app.enum.module.ebooking.step.LIST
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.EBOOKING_NEW]: {
			title: `Nouveau`,
			contextColor: `theme-mvc-mobile-background-color-light-blue`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			form: {
			        type: app.enum.datasetType.MODULE_EBOOKING,
			        linkSlug: app.structure.enum.pageSlug.EBOOKING_TIMELINE,
			        moduleOptions: {
			            step: app.enum.module.ebooking.step.NEW
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.EBOOKING_DETAIL]: {
			title: `Détail`,
			contextColor: `theme-mvc-mobile-background-color-light-blue`,
			pullToRefresh: true,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			message: {
			        type: app.enum.datasetType.MODULE_EBOOKING,
			        moduleOptions: {
			            step: app.enum.module.ebooking.step.DETAIL
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.EBOOKING_TIMELINE]: {
			title: `Créneau`,
			contextColor: `theme-mvc-mobile-background-color-light-blue`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			timeline: {
			        type: app.enum.datasetType.MODULE_EBOOKING,
			        moduleOptions: {
			            step: app.enum.module.ebooking.step.TIMELINE
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.MYPERISCHOOL]: {
			title: `myperischool`,
		}
	};

app.structure.frontNavigations = {
	home: {
		name: `Accueil`,
		linkSlug: app.structure.enum.pageSlug.HOME,
		active: `home`,
	},
	ticketing: {
		name: `Billetterie`,
		linkSlug: app.structure.enum.pageSlug.TICKETING_LIST,
		active: `ticketing`,
	},
};

app.structure.frontPages = {
		[app.structure.enum.pageSlug.HOME]: {
			theme: `app`,
			datasets: {
			weather: {
			        type: app.enum.datasetType.MODULE_WEATHER
			    }
			}
		},
		[app.structure.enum.pageSlug.PROFILE_LOG_IN]: {
			title: `S'identifier`,
			datasets: {
			profile: {
			        type: app.enum.datasetType.MODULE_PROFILE,
			        moduleOptions: {
			            step: app.enum.module.profile.step.LOG_IN
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.PROFILE_ACCOUNT]: {
			title: `Mon profil`,
			datasets: {
			profile: {
			        type: app.enum.datasetType.MODULE_PROFILE,
			        moduleOptions: {
			            step: app.enum.module.profile.step.ACCOUNT
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.TICKETING_LIST]: {
			title: `Billetterie`,
			pullToRefresh: true,
			datasets: {
			list: {
			        type: app.enum.datasetType.MODULE_TICKETING,
			        moduleOptions: {
			            step: app.enum.module.ticketing.step.LIST
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.TICKETING_DETAIL]: {
			title: `Événement`,
			pullToRefresh: true,
			datasets: {
			detail: {
			        type: app.enum.datasetType.MODULE_TICKETING,
			        moduleOptions: {
			            step: app.enum.module.ticketing.step.DETAIL
			        }
			    }
			}
		},
		[app.structure.enum.pageSlug.TICKETING_SELECT]: {
			title: `Réservation`,
			userAccountMustBeConnectedAndValidated: true,
			datasets: {
			select: {
			        type: app.enum.datasetType.MODULE_TICKETING,
			        moduleOptions: {
			            step: app.enum.module.ticketing.step.SELECT
			        }
			    }
			}
		}
	};

app.structure.frontMenu = [
	app.structure.frontNavigations.home,
	app.structure.frontNavigations.ticketing,
];

app.structure.firstPage = app.structure.enum.pageSlug.HOME;
app.structure.homePage = app.structure.enum.pageSlug.HOME;

app.structure.excludePathBeforeLeave = [app.structure.enum.pageSlug.EBOOKING_TIMELINE];

app.structure.frontHeader = 'generic_header';
app.structure.frontFooter = 'generic_footer';

app.structure.frontElements = [{ name: app.structure.frontHeader, theme: 'theme_porta' }, { name: app.structure.frontFooter }];