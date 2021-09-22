"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Event = _interopRequireDefault(require("./Event"));

var _EventsResponseAllOf = _interopRequireDefault(require("./EventsResponseAllOf"));

var _Pagination = _interopRequireDefault(require("./Pagination"));

var _PaginationLinks = _interopRequireDefault(require("./PaginationLinks"));

var _PaginationMeta = _interopRequireDefault(require("./PaginationMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The EventsResponse model module.
 * @module model/EventsResponse
 * @version 3.0.0-alpha1
 */
var EventsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>EventsResponse</code>.
   * @alias module:model/EventsResponse
   */
  function EventsResponse() {
    _classCallCheck(this, EventsResponse);

    EventsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(EventsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>EventsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/EventsResponse} obj Optional instance to populate.
     * @return {module:model/EventsResponse} The populated <code>EventsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new EventsResponse();

        if (data.hasOwnProperty('links')) {
          obj['links'] = _PaginationLinks["default"].constructFromObject(data['links']);
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _PaginationMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Event["default"]]);
        }
      }

      return obj;
    }
  }]);

  return EventsResponse;
}();
/**
 * @member {module:model/PaginationLinks} links
 */


EventsResponse.prototype['links'] = undefined;
/**
 * @member {module:model/PaginationMeta} meta
 */

EventsResponse.prototype['meta'] = undefined;
/**
 * @member {Array.<module:model/Event>} data
 */

EventsResponse.prototype['data'] = undefined;
var _default = EventsResponse;
exports["default"] = _default;