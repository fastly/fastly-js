"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _ApiClient = _interopRequireDefault(require("../ApiClient"));

var _Star = _interopRequireDefault(require("./Star"));

var _StarResponseAllOf = _interopRequireDefault(require("./StarResponseAllOf"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

/**
 * The StarResponse model module.
 * @module model/StarResponse
 * @version 3.0.0-alpha1
 */
var StarResponse = /*#__PURE__*/function () {
  /**
   * Constructs a new <code>StarResponse</code>.
   * @alias module:model/StarResponse
   * @implements module:model/Star
   * @implements module:model/StarResponseAllOf
   */
  function StarResponse() {
    _classCallCheck(this, StarResponse);

    _Star["default"].initialize(this);

    _StarResponseAllOf["default"].initialize(this);

    StarResponse.initialize(this);
  }
  /**
   * Initializes the fields of this object.
   * This method is used by the constructors of any subclasses, in order to implement multiple inheritance (mix-ins).
   * Only for internal use.
   */


  _createClass(StarResponse, null, [{
    key: "initialize",
    value: function initialize(obj) {}
    /**
     * Constructs a <code>StarResponse</code> from a plain JavaScript object, optionally creating a new instance.
     * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
     * @param {Object} data The plain JavaScript object bearing properties of interest.
     * @param {module:model/StarResponse} obj Optional instance to populate.
     * @return {module:model/StarResponse} The populated <code>StarResponse</code> instance.
     */

  }, {
    key: "constructFromObject",
    value: function constructFromObject(data, obj) {
      if (data) {
        obj = obj || new StarResponse();

        _Star["default"].constructFromObject(data, obj);

        _StarResponseAllOf["default"].constructFromObject(data, obj);

        if (data.hasOwnProperty('data')) {
          obj['data'] = _ApiClient["default"].convertToType(data['data'], Object);
        }
      }

      return obj;
    }
  }]);

  return StarResponse;
}();
/**
 * @member {Object} data
 */


StarResponse.prototype['data'] = undefined; // Implement Star interface:

/**
 * @member {module:model/StarData} data
 */

_Star["default"].prototype['data'] = undefined; // Implement StarResponseAllOf interface:

/**
 * @member {Object} data
 */

_StarResponseAllOf["default"].prototype['data'] = undefined;
var _default = StarResponse;
exports["default"] = _default;