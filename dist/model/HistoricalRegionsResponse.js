"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Historical = _interopRequireDefault(require("./Historical"));

var _HistoricalMeta = _interopRequireDefault(require("./HistoricalMeta"));

var _HistoricalRegionsResponseAllOf = _interopRequireDefault(require("./HistoricalRegionsResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalRegionsResponse model module.
 * @module model/HistoricalRegionsResponse
 * @version 3.0.0-alpha1
 */
var HistoricalRegionsResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalRegionsResponse</code>.
   * @alias module:model/HistoricalRegionsResponse
   * @implements module:model/Historical
   * @implements module:model/HistoricalRegionsResponseAllOf
   */
  function HistoricalRegionsResponse() {
    _classCallCheck(this, HistoricalRegionsResponse);

    _Historical["default"].initialize(this);

    _HistoricalRegionsResponseAllOf["default"].initialize(this);

    HistoricalRegionsResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalRegionsResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalRegionsResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalRegionsResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalRegionsResponse} The populated <code>HistoricalRegionsResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalRegionsResponse();

        _Historical["default"].constructFromObject(data, obj);

        _HistoricalRegionsResponseAllOf["default"].constructFromObject(data, obj);

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
          obj['data'] = _ApiClient["default"].convertToType(data['data'], ['String']);
        }
      }

      return obj;
    }
  }]);

  return HistoricalRegionsResponse;
}();
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */


HistoricalRegionsResponse.prototype['status'] = undefined;
/**
 * @member {module:model/HistoricalMeta} meta
 */

HistoricalRegionsResponse.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

HistoricalRegionsResponse.prototype['msg'] = undefined;
/**
 * @member {Array.<String>} data
 */

HistoricalRegionsResponse.prototype['data'] = undefined; // Implement Historical interface:

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

_Historical["default"].prototype['msg'] = undefined; // Implement HistoricalRegionsResponseAllOf interface:

/**
 * @member {Array.<String>} data
 */

_HistoricalRegionsResponseAllOf["default"].prototype['data'] = undefined;
var _default = HistoricalRegionsResponse;
exports["default"] = _default;