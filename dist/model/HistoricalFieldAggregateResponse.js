"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Historical = _interopRequireDefault(require("./Historical"));

var _HistoricalFieldAggregateResponseAllOf = _interopRequireDefault(require("./HistoricalFieldAggregateResponseAllOf"));

var _HistoricalMeta = _interopRequireDefault(require("./HistoricalMeta"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalFieldAggregateResponse model module.
 * @module model/HistoricalFieldAggregateResponse
 * @version 3.0.0-alpha1
 */
var HistoricalFieldAggregateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalFieldAggregateResponse</code>.
   * @alias module:model/HistoricalFieldAggregateResponse
   */
  function HistoricalFieldAggregateResponse() {
    _classCallCheck(this, HistoricalFieldAggregateResponse);

    HistoricalFieldAggregateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalFieldAggregateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalFieldAggregateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalFieldAggregateResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalFieldAggregateResponse} The populated <code>HistoricalFieldAggregateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalFieldAggregateResponse();

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _HistoricalMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'String');
        }

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [{
            'String': 'String'
          }]);
        }
      }

      return obj;
    }
  }]);

  return HistoricalFieldAggregateResponse;
}();
/**
 * @member {module:model/HistoricalMeta} meta
 */


HistoricalFieldAggregateResponse.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

HistoricalFieldAggregateResponse.prototype['msg'] = undefined;
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */

HistoricalFieldAggregateResponse.prototype['status'] = undefined;
/**
 * @member {Array.<Object.<String, String>>} data
 */

HistoricalFieldAggregateResponse.prototype['data'] = undefined;
var _default = HistoricalFieldAggregateResponse;
exports["default"] = _default;