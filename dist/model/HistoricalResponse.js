"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Historical = _interopRequireDefault(require("./Historical"));

var _HistoricalMeta = _interopRequireDefault(require("./HistoricalMeta"));

var _HistoricalResponseAllOf = _interopRequireDefault(require("./HistoricalResponseAllOf"));

var _Results = _interopRequireDefault(require("./Results"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The HistoricalResponse model module.
 * @module model/HistoricalResponse
 * @version 3.0.0-alpha1
 */
var HistoricalResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>HistoricalResponse</code>.
   * @alias module:model/HistoricalResponse
   */
  function HistoricalResponse() {
    _classCallCheck(this, HistoricalResponse);

    HistoricalResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(HistoricalResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>HistoricalResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/HistoricalResponse} obj Optional instance to populate.
     * @return {module:model/HistoricalResponse} The populated <code>HistoricalResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new HistoricalResponse();

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
          obj['data'] = _ApiClient["default"].convertToType(data['data'], {
            'String': Array
          });
        }
      }

      return obj;
    }
  }]);

  return HistoricalResponse;
}();
/**
 * @member {module:model/HistoricalMeta} meta
 */


HistoricalResponse.prototype['meta'] = undefined;
/**
 * If the query was not successful, this will provide a string that explains why.
 * @member {String} msg
 */

HistoricalResponse.prototype['msg'] = undefined;
/**
 * Whether or not we were able to successfully execute the query.
 * @member {String} status
 */

HistoricalResponse.prototype['status'] = undefined;
/**
 * @member {Object.<String, Array.<module:model/Results>>} data
 */

HistoricalResponse.prototype['data'] = undefined;
var _default = HistoricalResponse;
exports["default"] = _default;