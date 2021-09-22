"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Historical = _interopRequireDefault(require("./Historical"));

var _HistoricalMeta = _interopRequireDefault(require("./HistoricalMeta"));

var _HistoricalUsageMonthResponseAllOf = _interopRequireDefault(require("./HistoricalUsageMonthResponseAllOf"));

var _HistoricalUsageMonthResponseAllOfData = _interopRequireDefault(require("./HistoricalUsageMonthResponseAllOfData"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalUsageMonthResponse model module.
 * @module model/HistoricalUsageMonthResponse
 * @version 3.0.0-alpha1
 */
var HistoricalUsageMonthResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalUsageMonthResponse</code>.
   * @alias module:model/HistoricalUsageMonthResponse
   */
  function HistoricalUsageMonthResponse() {
    _classCallCheck(this, HistoricalUsageMonthResponse);

    HistoricalUsageMonthResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalUsageMonthResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalUsageMonthResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalUsageMonthResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalUsageMonthResponse} The populated <code>HistoricalUsageMonthResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalUsageMonthResponse();

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
          obj['data'] = _HistoricalUsageMonthResponseAllOfData["default"].constructFromObject(data['data']);
        }
      }

      return obj;
    }
  }]);

  return HistoricalUsageMonthResponse;
}();
/**
 * @member {module:model/HistoricalMeta} meta
 */


HistoricalUsageMonthResponse.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

HistoricalUsageMonthResponse.prototype['msg'] = undefined;
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */

HistoricalUsageMonthResponse.prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalUsageMonthResponseAllOfData} data
 */

HistoricalUsageMonthResponse.prototype['data'] = undefined;
var _default = HistoricalUsageMonthResponse;
exports["default"] = _default;