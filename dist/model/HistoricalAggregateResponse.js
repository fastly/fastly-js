"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Historical = _interopRequireDefault(require("./Historical"));

var _HistoricalAggregateResponseAllOf = _interopRequireDefault(require("./HistoricalAggregateResponseAllOf"));

var _HistoricalMeta = _interopRequireDefault(require("./HistoricalMeta"));

var _Results = _interopRequireDefault(require("./Results"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalAggregateResponse model module.
 * @module model/HistoricalAggregateResponse
 * @version 3.0.0-alpha1
 */
var HistoricalAggregateResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalAggregateResponse</code>.
   * @alias module:model/HistoricalAggregateResponse
   * @implements module:model/Historical
   * @implements module:model/HistoricalAggregateResponseAllOf
   */
  function HistoricalAggregateResponse() {
    _classCallCheck(this, HistoricalAggregateResponse);

    _Historical["default"].initialize(this);

    _HistoricalAggregateResponseAllOf["default"].initialize(this);

    HistoricalAggregateResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalAggregateResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalAggregateResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalAggregateResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalAggregateResponse} The populated <code>HistoricalAggregateResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalAggregateResponse();

        _Historical["default"].constructFromObject(data, obj);

        _HistoricalAggregateResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('status')) {
          obj['status'] = _ApiClient["default"].convertToType(data['status'], 'String');
        }

        if (data.hasOwnProperty('meta')) {
          obj['meta'] = _HistoricalMeta["default"].constructFromObject(data['meta']);
        }

        if (data.hasOwnProperty('msg')) {
          obj['msg'] = _ApiClient["default"].convertToType(data['msg'], 'String');
        }

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], [_Results["default"]]);
        }
      }

      return obj;
    }
  }]);

  return HistoricalAggregateResponse;
}();
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */


HistoricalAggregateResponse.prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalMeta} meta
 */

HistoricalAggregateResponse.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

HistoricalAggregateResponse.prototype['msg'] = undefined;
/**
 * @member {Array.<module:model/Results>} data
 */

HistoricalAggregateResponse.prototype['data'] = undefined; // Implement Historical interface:

/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */

_Historical["default"].prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalMeta} meta
 */

_Historical["default"].prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

_Historical["default"].prototype['msg'] = undefined; // Implement HistoricalAggregateResponseAllOf interface:

/**
 * @member {Array.<module:model/Results>} data
 */

_HistoricalAggregateResponseAllOf["default"].prototype['data'] = undefined;
var _default = HistoricalAggregateResponse;
exports["default"] = _default;